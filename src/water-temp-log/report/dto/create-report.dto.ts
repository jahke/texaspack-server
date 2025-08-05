// src/water-temp-log/report/dto/create-report.dto.ts
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateWaterTempReportDto {
  @IsDateString()
  reportDate: string;

  @IsOptional()
  @IsString()
  verifiedBy?: string;

  @IsOptional()
  @IsDateString()
  verifiedDate?: string;

  @IsOptional()
  @IsString()
  actionTaken?: string;
}