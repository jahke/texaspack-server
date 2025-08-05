// src/smart-sorter/report/dto/create-report.dto.ts
import { IsInt, IsDateString, IsString, IsOptional, Min, IsArray, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSmartSorterReportDto {
  @IsInt()
  @Type(() => Number)
  sorter1: number;

  @IsInt()
  @Type(() => Number)
  sorter2: number;

  @IsDateString()
  reportDate: string;

  @IsString()
  boatName: string;

  @IsInt()
  @Min(0)
  qty: number;

  @IsString()
  boatId: string;

  @IsString()
  brand: string;

  @IsString()
  color: string;

  @IsString()
  dateCode: string;

  @IsOptional()
  @IsString()
  actionTaken?: string;

  @IsOptional()
  @IsString()
  verifiedBy?: string;

  @IsOptional()
  @IsDateString()
  verifiedDate?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  qcInitials?: string[];
}