import { Controller, Get, Param, Query } from '@nestjs/common';
import { NoteService } from './note.service';
import { CommentQueryDto } from './dto/comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get(':id')
  @ApiTags('note')
  async note(@Param('id') id: string) {
    const { data } = await this.noteService.getNode(id);
    return data;
  }

  @Get(':id/comment')
  @ApiTags('note')
  async comment(@Param('id') id: string, @Query() query: CommentQueryDto) {
    const { data } = await this.noteService.getComment(id, query);
    return data;
  }
}
