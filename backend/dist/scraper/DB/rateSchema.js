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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate24Schema = exports.Rate22Schema = exports.SilverSchema = exports.Silver = exports.Rate22 = exports.Rate24 = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Rate24 = class Rate24 extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate24.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "oneGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "eightGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "tenGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "hundGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "oneKiloGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate24.prototype, "oneTola", void 0);
Rate24 = __decorate([
    (0, mongoose_1.Schema)()
], Rate24);
exports.Rate24 = Rate24;
let Rate22 = class Rate22 extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate22.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "oneGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "eightGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "tenGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "hundGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "oneKiloGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate22.prototype, "oneTola", void 0);
Rate22 = __decorate([
    (0, mongoose_1.Schema)()
], Rate22);
exports.Rate22 = Rate22;
let Silver = class Silver extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Silver.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "oneGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "eightGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "tenGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "hundGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "oneKiloGram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Silver.prototype, "oneTola", void 0);
Silver = __decorate([
    (0, mongoose_1.Schema)()
], Silver);
exports.Silver = Silver;
exports.SilverSchema = mongoose_1.SchemaFactory.createForClass(Silver);
exports.Rate22Schema = mongoose_1.SchemaFactory.createForClass(Rate22);
exports.Rate24Schema = mongoose_1.SchemaFactory.createForClass(Rate24);
//# sourceMappingURL=rateSchema.js.map