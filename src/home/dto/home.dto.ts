import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HomeFeedQueryDto {
  @ApiProperty()
  @IsString()
  category: string;

  @IsString()
  page: number;

  @IsString()
  pageSize: number;
}
