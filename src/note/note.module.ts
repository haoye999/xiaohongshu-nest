import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { MyHttpModule } from '../common/module/http/http.module';

@Module({
  imports: [MyHttpModule],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
