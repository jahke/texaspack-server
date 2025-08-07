// src/smart-sorter/entry/dto/create-entry.dto.ts
import { IsString, IsInt, Min, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSmartSorterEntryDto {
  @IsInt()
  @Type(() => Number)
  reportId: number;

  @IsString()
  size: string;

  @IsInt()
  @Type(() => Number)
  @Min(0)
  units: number;

  @IsInt()
  @Type(() => Number)
  @Min(0)
  count: number;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  uniformity: number;
}