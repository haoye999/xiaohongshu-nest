import { IsNumberString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CollectDto {
  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page: number;

  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page_size: number;
}
