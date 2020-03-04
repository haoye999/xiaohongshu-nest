import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class HomeFeedQueryDto {
  @ApiProperty()
  @IsString()
  oid: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  cursor_score: number;
}
