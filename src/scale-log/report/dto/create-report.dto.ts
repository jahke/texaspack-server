// src/scale-log/report/dto/create-report.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  department: string;

  @IsDateString()
  logDate: string;

  @IsString()
  @IsOptional()
  verifiedBy?: string;

  @IsDateString()
  @IsOptional()
  verifiedDate?: string;

  @IsString()
  @IsOptional()
  comments?: string;
}