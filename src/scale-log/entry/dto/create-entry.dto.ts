// src/scale-log/entry/dto/create-entry.dto.ts
import { IsString, IsNotEmpty, IsIn, IsInt, IsOptional } from 'class-validator';

export class CreateEntryDto {
  @IsInt()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  scaleNo: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsIn(['A','IA'])
  reading: 'A' | 'IA';

  @IsOptional()
  smart?: boolean;

  @IsOptional()
  cs?: boolean;

  @IsOptional()
  baggerA?: boolean;

  @IsOptional()
  baggerB?: boolean;

  @IsOptional()
  iqf?: boolean;

  @IsString()
  @IsNotEmpty()
  operatorInitials: string;

  @IsString()
  @IsNotEmpty()
  qcInitials: string;
}