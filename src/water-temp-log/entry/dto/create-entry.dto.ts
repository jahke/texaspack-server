// src/water-temp-log/entry/dto/create-entry.dto.ts
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWaterTempEntryDto {
  @IsInt()
  @Type(() => Number)
  reportId: number;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  boatName: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  thaw1Water?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  thaw2Water?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  feed1Water?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  feed1Product?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  feed2Water?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  feed2Product?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  recirc1Water?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  recirc2Water?: number;

  @IsString()
  @IsNotEmpty()
  qcInitials: string;
}