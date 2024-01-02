import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Rate22, Rate24, Silver } from "../scraper/DB/rateSchema";

@Injectable()
export class RateDataService {
  constructor(
    @InjectModel(Rate24.name) private rateModel24: Model<Rate24>,
    @InjectModel(Rate22.name) private rateModel22: Model<Rate22>,
    @InjectModel(Silver.name) private silverModel: Model<Silver>,
  ) {}
  async getTwentyFourRate(filter, field) {
    try {
      return await this.rateModel24.find(filter).select(field).exec();
    } catch (err) {
      throw err;
    }
  }
  async getTwentyTwoRate(filter, field) {
    try {
      return await this.rateModel22.find(filter).select(field).exec();
    } catch (err) {
      throw err;
    }
  }
  async getSilverRate(filter, field) {
    try {
      return await this.silverModel.find(filter).select(field).exec();
    } catch (err) {
      throw err;
    }
  }
}
