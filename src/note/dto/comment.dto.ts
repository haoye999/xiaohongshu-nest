import { IsNumberString, IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CommentQueryDto {
  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page_size: number;

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  end_id: string;
}

export class RelateQueryDto {
  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  pageSize: number;

  @IsNumberString()
  @ApiPropertyOptional()
  @IsOptional()
  page: number;
}
