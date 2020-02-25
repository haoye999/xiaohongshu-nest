import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { MyHttpModule } from '../common/module/http/http.module';

@Module({
  imports: [MyHttpModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
