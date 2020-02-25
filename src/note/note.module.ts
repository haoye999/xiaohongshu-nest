import { Module, HttpModule } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [HttpModule.register({
    baseURL: 'https://www.xiaohongshu.com',
  })],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}