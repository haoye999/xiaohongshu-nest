import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CollectDto } from './dto/collect.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiTags('user')
  async user(@Param('id') id: string) {
    const { data } = await this.userService.getUser(id);
    return data;
  }

  @Get(':id/collect')
  @ApiTags('user')
  async collect(@Param('id') id: string, @Query() query: CollectDto) {
    const { data } = await this.userService.getUserCollect(id, query);
    return data;
  }
}
