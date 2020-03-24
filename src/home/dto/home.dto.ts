import { IsString, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HomeFeedQueryDto {
  @ApiProperty()
  @IsString()
  category: string;

  @IsNumberString()
  page: number;

  @IsNumberString()
  pageSize: number;
}
