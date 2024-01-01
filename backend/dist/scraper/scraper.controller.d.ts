import { ScraperService } from './scraper.service';
export declare class ScraperController {
    private readonly scrarerService;
    constructor(scrarerService: ScraperService);
    getScrapeData(): Promise<string>;
}
