import { IsNumberString, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserNoteDto {
  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page: number;

  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page_size: number;
}

export class UserCollectDto {
  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  num: number;

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  start: string;
}
