import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [HomeModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
