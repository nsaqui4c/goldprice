"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperService = void 0;
const common_1 = require("@nestjs/common");
const cheerio = require("cheerio");
const axios_1 = require("axios");
let ScraperService = class ScraperService {
    async getDataFromPage(url) {
        return axios_1.default
            .get(url)
            .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const tables = $('.table');
            const json = this.parseTableToJSON(tables[5], $);
            return json;
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
            return error;
        });
    }
    parseTableToJSON(table, $) {
        const json = {};
        const rows = $(table).find('tr');
        const header = [];
        let currentKey = '';
        rows.each((index, row) => {
            const cells = $(row).find('th, td');
            if (cells.hasClass('center')) {
                currentKey = $(cells).text().trim();
                json[currentKey] = [];
            }
            else if ($(row).hasClass('active')) {
                cells.each((idh, cell) => {
                    header[idh] = $(cell).text().trim();
                });
            }
            else {
                const rowData = {};
                cells.each((idx, cell) => {
                    rowData[header[idx]] = $(cell).text().trim();
                });
                json[currentKey].push(rowData);
            }
        });
        return json;
    }
};
ScraperService = __decorate([
    (0, common_1.Injectable)()
], ScraperService);
exports.ScraperService = ScraperService;
//# sourceMappingURL=scraper.service.js.map