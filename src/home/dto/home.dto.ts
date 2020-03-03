import { IsString, IsNumberString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class HomeFeedQueryDto {
  @ApiProperty()
  @IsString()
  oid: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  cursor_score: number;
}
