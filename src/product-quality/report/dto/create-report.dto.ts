// src/product-quality/report/dto/create-report.dto.ts
import {
  IsString,
  IsInt,
  IsBoolean,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateProductQualityReportDto {
  @IsString() boatNumber: string;
  @IsString() freezerIce: string;
  @IsInt() quantity: number;
  @IsDateString() reportDate: string;
  @IsString() boatName: string;
  @IsString() boatId: string;
  @IsString() brand: string;
  @IsBoolean() quality: boolean;
  @IsBoolean() regular: boolean;
  @IsString() timeIn: string;
  @IsString() timeOut: string;
  @IsString() qcName: string;
  @IsDateString() qcDate: string;
  @IsOptional() @IsString() verifiedBy?: string;
  @IsOptional() @IsDateString() verifiedDate?: string;
}


