import { Module } from '@nestjs/common';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate24, Rate24Schema,Rate22, Rate22Schema,Silver, SilverSchema } from './DB/rateSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rate24.name, schema: Rate24Schema },{ name: Rate22.name, schema: Rate22Schema },{ name: Silver.name, schema: SilverSchema }])],
  controllers: [ScraperController],
  providers: [ScraperService]
})
export class ScraperModule {}
