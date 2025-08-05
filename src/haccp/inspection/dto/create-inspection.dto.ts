// src/haccp/inspection/dto/create-inspection.dto.ts

import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsIn,
  Min,
} from 'class-validator';

export class CreateInspectionDto {
  @IsInt()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsBoolean()
  sulfiteDeclared: boolean;

  @IsBoolean()
  shrimpDeclared: boolean;

  @IsIn(['M', 'P'], { message: 'Must be "M" (Master) or "P" (Package)' })
  masterOrPackage: 'M' | 'P';

  @IsInt()
  @Min(0)
  numberInspected: number;

  @IsString()
  @IsNotEmpty()
  qcInitials: string;
}
