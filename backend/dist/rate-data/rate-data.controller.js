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
exports.RateDataController = void 0;
const common_1 = require("@nestjs/common");
const rate_data_service_1 = require("./rate-data.service");
let RateDataController = class RateDataController {
    constructor(rateDataService) {
        this.rateDataService = rateDataService;
    }
    async getTwentyFourRate(filter, field) {
        return this.rateDataService.getTwentyFourRate(filter, field);
    }
    async getTwentyTwoRate(filter, field) {
        return this.rateDataService.getTwentyTwoRate(filter, field);
    }
    async getSilverRate(filter, field) {
        return this.rateDataService.getSilverRate(filter, field);
    }
};
__decorate([
    (0, common_1.Post)('four'),
    __param(0, (0, common_1.Body)('filter')),
    __param(1, (0, common_1.Body)('field')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RateDataController.prototype, "getTwentyFourRate", null);
__decorate([
    (0, common_1.Post)('two'),
    __param(0, (0, common_1.Body)('filter')),
    __param(1, (0, common_1.Body)('field')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RateDataController.prototype, "getTwentyTwoRate", null);
__decorate([
    (0, common_1.Post)('silver'),
    __param(0, (0, common_1.Body)('filter')),
    __param(1, (0, common_1.Body)('field')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RateDataController.prototype, "getSilverRate", null);
RateDataController = __decorate([
    (0, common_1.Controller)('rate-data'),
    __metadata("design:paramtypes", [rate_data_service_1.RateDataService])
], RateDataController);
exports.RateDataController = RateDataController;
//# sourceMappingURL=rate-data.controller.js.map