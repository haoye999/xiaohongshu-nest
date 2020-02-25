import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiBody({
    description: '主页 hello word',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
