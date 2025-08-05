import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReportDto {
  @IsDateString()
  reportDate: string;

  @IsString()
  @IsNotEmpty()
  qcInspector: string;

  @IsDateString()
  qcInspectorDate: string;

  @IsString()
  @IsNotEmpty()
  washCrewRep: string;

  @IsDateString()
  washCrewRepDate: string;

  @IsString()
  @IsOptional()
  verifiedBy?: string;

  @IsDateString()
  @IsOptional()
  verifiedDate?: string;
}
