// src/foreign-material/report/dto/create-report.dto.ts
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateForeignMaterialReportDto {
  @IsDateString()
  reportDate: string;

  @IsString()
  @IsOptional()
  actionTaken?: string;

  @IsString()
  @IsOptional()
  verifiedBy?: string;

  @IsDateString()
  @IsOptional()
  verifiedDate?: string;
}
