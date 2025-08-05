// src/haccp/dto/create-haccp.dto.ts

import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateHaccpDto {
  @IsString()
  @IsNotEmpty()
  department: string;

  @IsDateString()
  @IsNotEmpty()
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
