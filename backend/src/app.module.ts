import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperModule } from './scraper/scraper.module';
import { MongooseModule } from '@nestjs/mongoose';
import {config} from 'dotenv'

config({path: './../.env'})
@Module({
  imports: [ScraperModule,MongooseModule.forRoot(process.env.DBSTRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
