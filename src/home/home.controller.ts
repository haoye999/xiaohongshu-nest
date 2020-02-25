import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeFeedQuery } from './dto/home.dto';


@Controller('api/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async homeFeed(@Query() query: HomeFeedQuery) {
    const { data } = await this.homeService.getHomeFeed(query);
    return data;
  }
}
