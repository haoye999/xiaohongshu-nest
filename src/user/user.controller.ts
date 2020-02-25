import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async user(@Param('id') id: string) {
    const { data } = await this.userService.getUser(id);
    return data;
  }
}
