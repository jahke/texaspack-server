// src/product-quality/entry/dto/create-entry.dto.ts
import {
  IsInt,
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class Defect {
  @IsString() label: string;
  @IsNumber() weight: number;
}

export class CreateProductQualityEntryDto {
  @IsInt() reportId: number;
  @IsString() size: string;
  @IsNumber() sampleWeightOz: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Defect)
  defects: Defect[];

  @IsNumber() totalDefectsWeightOz: number;
  @IsNumber() percentOfDefects: number;
  @IsOptional() @IsString() comments?: string;
}


