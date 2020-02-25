import { IsString, IsNumberString, IsOptional } from 'class-validator';

export class HomeFeedQuery {
  @IsString()
  oid: string;

  @IsOptional()
  @IsNumberString()
  page: number;

  @IsOptional()
  @IsNumberString()
  pageSize: number
}