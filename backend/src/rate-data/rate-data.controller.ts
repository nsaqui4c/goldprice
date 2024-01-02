import { Controller, Post, Body } from '@nestjs/common';

import { RateDataService } from './rate-data.service';

@Controller('rate-data')
export class RateDataController {
    constructor(private rateDataService: RateDataService){}

    @Post('four')
    async getTwentyFourRate(@Body('filter') filter,@Body('field') field){
        return this.rateDataService.getTwentyFourRate(filter,field)
    }
    @Post('two')
    async getTwentyTwoRate(@Body('filter') filter,@Body('field') field){
        return this.rateDataService.getTwentyTwoRate(filter,field)
    }
    @Post('silver')
    async getSilverRate(@Body('filter') filter,@Body('field') field){
        return this.rateDataService.getSilverRate(filter,field)
    }
}
