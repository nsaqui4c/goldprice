import { Injectable } from "@nestjs/common";
import * as cheerio from "cheerio";
import axios from "axios";

@Injectable()
export class ScraperService {
  async getDataFromPage(url: string): Promise<string> {
    return axios
          .get(url)
          .then((response) => {
              const html = response.data;
              const $ = cheerio.load(html);
              const tables = $('.table');
              const json =this.parseTableToJSON(tables[5],$)
              return json; 
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
              return error;
          });
  }

  parseTableToJSON(table,$) {
    const json = {};
    const rows = $(table).find('tr');
    const header=[]    
    let currentKey = '';
    rows.each((index, row) => {
        const cells = $(row).find('th, td');
        if (cells.hasClass('center')) {
            currentKey = $(cells).text().trim();
            json[currentKey] = [];
        } 
        else if($(row).hasClass('active')){
            cells.each((idh,cell)=>{
                header[idh] = $(cell).text().trim()
            })
        }
        else {
            const rowData = {};
            cells.each((idx, cell) => {
                rowData[ header[idx]] = $(cell).text().trim();
            });
            json[currentKey].push(rowData);
        }
    });

    return json;
}
}
