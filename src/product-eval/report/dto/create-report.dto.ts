import { IsDateString, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateProductEvalReportDto {
  @IsString() @IsNotEmpty()
  brand: string;

  @IsString() @IsNotEmpty()
  timeIn: string;

  @IsString() @IsNotEmpty()
  timeOut: string;

  @IsString() @IsNotEmpty()
  description: string;

  @IsString() @IsNotEmpty()
  boatNumber: string;

  @IsString() @IsNotEmpty()
  boatName: string;

  @IsInt()
  quantity: number;

  @IsDateString()
  reportDate: string;

  @IsString() @IsNotEmpty()
  species: string;

  @IsString() @IsNotEmpty()
  boatId: string;

  @IsString() @IsNotEmpty()
  size: string;

  @IsString() @IsOptional()
  comments?: string;

  @IsString() @IsNotEmpty()
  qcName: string;

  @IsDateString()
  qcDate: string;

  @IsString() @IsOptional()
  verifiedBy?: string;

  @IsDateString() @IsOptional()
  verifiedDate?: string;
}
