import { Module, HttpModule } from '@nestjs/common';
import { MyHttpService } from './http.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://www.xiaohongshu.com',
    }),
  ],
  providers: [MyHttpService],
  exports: [MyHttpService],
})
export class MyHttpModule {}
