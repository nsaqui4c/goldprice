import { Rate24, Rate22, Silver } from "./DB/rateSchema";
import { Model } from "mongoose";
export declare class ScraperService {
    private rateModel;
    private rateModel22;
    private silverModel;
    constructor(rateModel: Model<Rate24>, rateModel22: Model<Rate22>, silverModel: Model<Silver>);
    getDataFromPage(url: string): Promise<string>;
    create(twentyFour: any, twentytwo: any, silver: any, dateToday: any): Promise<any>;
    createUpsertData(dataToUpsert: any): any;
    writeData(model: any, data: any, dateToday: any): Promise<Record<string, unknown>>;
}
