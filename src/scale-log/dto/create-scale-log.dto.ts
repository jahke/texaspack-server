// src/scale-log/dto/create-scale-log.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsOptional, ValidateNested, ArrayNotEmpty, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class EntryDto {
  @IsString() @IsOptional()
  scaleNo: string;

  @IsString() @IsNotEmpty()
  time: string;

  @IsString() @IsNotEmpty()
  reading: 'A' | 'IA';

  @IsOptional() smart?: boolean;
  @IsOptional() cs?: boolean;
  @IsOptional() baggerA?: boolean;
  @IsOptional() baggerB?: boolean;
  @IsOptional() iqf?: boolean;

  @IsString() @IsNotEmpty()
  operatorInitials: string;

  @IsString() @IsNotEmpty()
  qcInitials: string;
}

export class CreateScaleLogDto {
  @IsString() @IsNotEmpty()
  department: string;

  @IsDateString()
  logDate: string;

  @IsOptional() @IsString()
  verifiedBy?: string;

  @IsOptional() @IsDateString()
  verifiedDate?: string;

  @IsOptional() @IsString()
  comments?: string;

  @IsArray() @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => EntryDto)
  entries: EntryDto[];
}