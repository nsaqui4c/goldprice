/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { Rate22, Rate24, Silver } from "../scraper/DB/rateSchema";
export declare class RateDataService {
    private rateModel24;
    private rateModel22;
    private silverModel;
    constructor(rateModel24: Model<Rate24>, rateModel22: Model<Rate22>, silverModel: Model<Silver>);
    getTwentyFourRate(filter: any, field: any): Promise<(import("mongoose").Document<unknown, {}, Rate24> & Rate24 & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getTwentyTwoRate(filter: any, field: any): Promise<(import("mongoose").Document<unknown, {}, Rate22> & Rate22 & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSilverRate(filter: any, field: any): Promise<(import("mongoose").Document<unknown, {}, Silver> & Silver & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
