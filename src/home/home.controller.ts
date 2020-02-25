import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeFeedQueryDto } from './dto/home.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('homefeed/notes')
  @ApiTags('home')
  async homeFeed(@Query() query: HomeFeedQueryDto) {
    const { data } = await this.homeService.getHomeFeed(query);
    return data;
  }
}
