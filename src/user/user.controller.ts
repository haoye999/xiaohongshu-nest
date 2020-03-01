import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserNoteDto, UserCollectDto } from './dto/user.dto';
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

  @Get(':id/note')
  @ApiTags('user')
  async note(@Param('id') id: string, @Query() query: UserNoteDto) {
    const { data } = await this.userService.getUserNote(id, query);
    return data;
  }

  @Get(':id/collect')
  @ApiTags('user')
  async collect(@Param('id') id: string, @Query() query: UserCollectDto) {
    const { data } = await this.userService.getUserCollect(id, query);
    return data;
  }
}
