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
exports.RateDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rateSchema_1 = require("../scraper/DB/rateSchema");
let RateDataService = class RateDataService {
    constructor(rateModel24, rateModel22, silverModel) {
        this.rateModel24 = rateModel24;
        this.rateModel22 = rateModel22;
        this.silverModel = silverModel;
    }
    async getTwentyFourRate(filter, field) {
        try {
            return await this.rateModel24.find(filter).select(field).exec();
        }
        catch (err) {
            throw err;
        }
    }
    async getTwentyTwoRate(filter, field) {
        try {
            return await this.rateModel22.find(filter).select(field).exec();
        }
        catch (err) {
            throw err;
        }
    }
    async getSilverRate(filter, field) {
        try {
            return await this.silverModel.find(filter).select(field).exec();
        }
        catch (err) {
            throw err;
        }
    }
};
RateDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rateSchema_1.Rate24.name)),
    __param(1, (0, mongoose_1.InjectModel)(rateSchema_1.Rate22.name)),
    __param(2, (0, mongoose_1.InjectModel)(rateSchema_1.Silver.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], RateDataService);
exports.RateDataService = RateDataService;
//# sourceMappingURL=rate-data.service.js.map