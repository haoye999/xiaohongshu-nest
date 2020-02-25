import { Controller, Get, Param } from '@nestjs/common';
import { NoteService } from './note.service';


@Controller('api/note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get(':id')
  async homeFeed(@Param('id') id: string) {
    const { data } = await this.noteService.getNode(id);
    return data;
  }
}
