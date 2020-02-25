import { Module, HttpModule } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [HttpModule.register({
    baseURL: 'https://www.xiaohongshu.com',
  })],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {};