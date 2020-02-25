import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MyHttpModule } from '../common/module/http/http.module';

@Module({
  imports: [MyHttpModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
