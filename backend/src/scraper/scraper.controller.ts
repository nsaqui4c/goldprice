import { Controller, Get } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
    constructor(private readonly scrarerService : ScraperService){}

    @Get('scrape')
    async getScrapeData(){
        const url = 'https://www.goldsrate.com/india/uttar-pradesh/24-karat-gold-rate-in-allahabad-chowk-211003.html';
        return this.scrarerService.getDataFromPage(url)
    }
}
