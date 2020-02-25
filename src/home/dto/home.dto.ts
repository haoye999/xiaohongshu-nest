import { IsString, IsNumberString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class HomeFeedQueryDto {
  @ApiProperty()
  @IsString()
  oid: string;

  @ApiPropertyOptional({
    default: 1,
  })
  @IsOptional()
  @IsNumberString()
  page: number;

  @ApiPropertyOptional({
    default: 10,
  })
  @IsOptional()
  @IsNumberString()
  pageSize: number;
}
