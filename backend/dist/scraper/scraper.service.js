"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperService = void 0;
const common_1 = require("@nestjs/common");
const rateSchema_1 = require("./DB/rateSchema");
const cheerio = require("cheerio");
const axios_1 = require("axios");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dotenv_1 = require("dotenv");
const helper_1 = require("./helper");
(0, dotenv_1.config)({ path: "./../.env" });
let ScraperService = class ScraperService {
    constructor(rateModel, rateModel22, silverModel) {
        this.rateModel = rateModel;
        this.rateModel22 = rateModel22;
        this.silverModel = silverModel;
    }
    async getDataFromPage(url) {
        const twentyFourIndex = process.env.KARAT24 ||
            "24 Karat Gold Rate in last 10 Days in Allahabad Chowk - 211003, Allahabad";
        const twentytwoIndex = process.env.KARAT22 ||
            "22 Karat Gold Rate in last 10 Days in Allahabad Chowk - 211003, Allahabad";
        const silverIndex = process.env.SILVER ||
            "Silver Price in last 10 Days in Allahabad Chowk - 211003, Allahabad";
        const dateToday = new Date();
        return axios_1.default
            .get(url)
            .then(async (response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const tables = $(".table");
            const json = (0, helper_1.parseTableToJSON)(tables[5], $);
            const twentyFour = this.createUpsertData(json[twentyFourIndex]);
            const twentytwo = this.createUpsertData(json[twentytwoIndex]);
            const silver = this.createUpsertData(json[silverIndex]);
            const result = await this.create(twentyFour, twentytwo, silver, dateToday);
            return { date: dateToday, result };
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
            return error;
        });
    }
    async create(twentyFour, twentytwo, silver, dateToday) {
        const result24 = await this.writeData(this.rateModel, twentyFour, dateToday);
        const result22 = await this.writeData(this.rateModel22, twentytwo, dateToday);
        const resultSilver = await this.writeData(this.silverModel, silver, dateToday);
        const result = {
            gold24: result24,
            gold22: result22,
            silver: resultSilver,
        };
        console.log(result);
        return result;
    }
    createUpsertData(dataToUpsert) {
        const bulkUpdateOps = dataToUpsert.map((item) => ({
            updateOne: {
                filter: { date: item.date },
                update: { $set: item },
                upsert: true,
            },
        }));
        return bulkUpdateOps;
    }
    async writeData(model, data, dateToday) {
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
};
ScraperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rateSchema_1.Rate24.name)),
    __param(1, (0, mongoose_1.InjectModel)(rateSchema_1.Rate22.name)),
    __param(2, (0, mongoose_1.InjectModel)(rateSchema_1.Silver.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ScraperService);
exports.ScraperService = ScraperService;
//# sourceMappingURL=scraper.service.js.map