// src/cond-pkg-bag/report/dto/create-report.dto.ts
import { IsOptional, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateReportDto {
  @IsOptional()
  @IsString()
  comments?: string;

  @IsString()
  @IsNotEmpty()
  qcName: string;

  @IsDateString()
  qcDate: string;

  @IsOptional()
  @IsString()
  verifiedBy?: string;

  @IsOptional()
  @IsDateString()
  verifiedDate?: string;
}
