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
import { Document } from 'mongoose';
export declare class Rate24 extends Document {
    date: string;
    oneGram: number;
    eightGram: number;
    tenGram: number;
    hundGram: number;
    oneKiloGram: number;
    oneTola: number;
}
export declare class Rate22 extends Document {
    date: string;
    oneGram: number;
    eightGram: number;
    tenGram: number;
    hundGram: number;
    oneKiloGram: number;
    oneTola: number;
}
export declare class Silver extends Document {
    date: string;
    oneGram: number;
    eightGram: number;
    tenGram: number;
    hundGram: number;
    oneKiloGram: number;
    oneTola: number;
}
export declare const SilverSchema: import("mongoose").Schema<Silver, import("mongoose").Model<Silver, any, any, any, Document<unknown, any, Silver> & Silver & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Silver, Document<unknown, {}, import("mongoose").FlatRecord<Silver>> & import("mongoose").FlatRecord<Silver> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Rate22Schema: import("mongoose").Schema<Rate22, import("mongoose").Model<Rate22, any, any, any, Document<unknown, any, Rate22> & Rate22 & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rate22, Document<unknown, {}, import("mongoose").FlatRecord<Rate22>> & import("mongoose").FlatRecord<Rate22> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Rate24Schema: import("mongoose").Schema<Rate24, import("mongoose").Model<Rate24, any, any, any, Document<unknown, any, Rate24> & Rate24 & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rate24, Document<unknown, {}, import("mongoose").FlatRecord<Rate24>> & import("mongoose").FlatRecord<Rate24> & {
    _id: import("mongoose").Types.ObjectId;
}>;
