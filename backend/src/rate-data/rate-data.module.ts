import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate22, Rate22Schema, Rate24, Rate24Schema, Silver, SilverSchema } from '../scraper/DB/rateSchema';
import { RateDataController } from './rate-data.controller';
import { RateDataService } from './rate-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rate24.name, schema: Rate24Schema },
      { name: Rate22.name, schema: Rate22Schema },
      { name: Silver.name, schema: SilverSchema },
    ]),
  ],
  controllers: [RateDataController],
  providers: [RateDataService]
})
export class RateDataModule {}
