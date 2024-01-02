import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rate24 extends Document {
  @Prop()
  date: string;

  @Prop()
  oneGram: number;

  @Prop()
  eightGram: number;
  @Prop()
  tenGram: number;

  @Prop()
  hundGram: number;
  @Prop()
  oneKiloGram: number;

  @Prop()
  oneTola: number;
}


@Schema()
export class Rate22 extends Document {
  @Prop()
  date: string;

  @Prop()
  oneGram: number;

  @Prop()
  eightGram: number;
  @Prop()
  tenGram: number;

  @Prop()
  hundGram: number;
  @Prop()
  oneKiloGram: number;

  @Prop()
  oneTola: number;
}




@Schema()
export class Silver extends Document {
  @Prop()
  date: string;

  @Prop()
  oneGram: number;

  @Prop()
  eightGram: number;
  @Prop()
  tenGram: number;

  @Prop()
  hundGram: number;
  @Prop()
  oneKiloGram: number;

  @Prop()
  oneTola: number;
}

export const SilverSchema = SchemaFactory.createForClass(Silver);
export const Rate22Schema = SchemaFactory.createForClass(Rate22);
export const Rate24Schema = SchemaFactory.createForClass(Rate24);