import { Injectable } from "@nestjs/common";
import { Rate24, Rate22, Silver } from "./DB/rateSchema";
import * as cheerio from "cheerio";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { config } from "dotenv";
import { parseTableToJSON } from "./helper";

config({ path: "./../.env" });
@Injectable()
export class ScraperService {
  constructor(
    @InjectModel(Rate24.name) private rateModel: Model<Rate24>,
    @InjectModel(Rate22.name) private rateModel22: Model<Rate22>,
    @InjectModel(Silver.name) private silverModel: Model<Silver>,
  ) {}
  async getDataFromPage(url: string): Promise<string> {
    const twentyFourIndex =
      process.env.KARAT24 ||
      "24 Karat Gold Rate in last 10 Days in Allahabad Chowk - 211003, Allahabad";
    const twentytwoIndex =
      process.env.KARAT22 ||
      "22 Karat Gold Rate in last 10 Days in Allahabad Chowk - 211003, Allahabad";
    const silverIndex =
      process.env.SILVER ||
      "Silver Price in last 10 Days in Allahabad Chowk - 211003, Allahabad";
    
    const dateToday = new Date();
    return axios
      .get(url)
      .then(async (response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const tables = $(".table");
        const json = parseTableToJSON(tables[5], $);

        const twentyFour = this.createUpsertData(json[twentyFourIndex]);
        const twentytwo = this.createUpsertData(json[twentytwoIndex]);
        const silver = this.createUpsertData(json[silverIndex]);

        const result = await this.create(twentyFour, twentytwo, silver,dateToday);
        return {date: dateToday,result};
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return error;
      });
  }

  async create(twentyFour, twentytwo, silver, dateToday): Promise<any> {
    // const rateData = {
    //   name: "test",
    //   age: 10,
    //   breed: "black",
    // };
    // const createdRate = new this.rateModel(rateData);
    // return createdRate.save();
   
    const result24 = await this.writeData(
      this.rateModel,
      twentyFour,
      dateToday,
    );
    const result22 = await this.writeData(
      this.rateModel22,
      twentytwo,
      dateToday,
    );
    const resultSilver = await this.writeData(
      this.silverModel,
      silver,
      dateToday,
    );
    
    const result = {
      gold24: result24,
      gold22: result22,
      silver: resultSilver,
    };
    console.log(result)
    return result
  }

  createUpsertData(dataToUpsert) {
    const bulkUpdateOps = dataToUpsert.map((item) => ({
      updateOne: {
        filter: { date: item.date },
        update: { $set: item },
        upsert: true, // Set to true for upsert
      },
    }));
    return bulkUpdateOps;
  }

  async writeData(model, data, dateToday): Promise<Record<string, unknown>> {
    return model
      .bulkWrite(data)
      .then((result) => {
        console.log(`${dateToday}Upsert operation completed:`, result);
        return result;
      })
      .catch((error) => {
        console.error(`${dateToday}Error during upsert operation:`, error);
        return error;
      });
    
  }
}
