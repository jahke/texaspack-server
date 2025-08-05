import { IsDateString, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateBulkToteTempReportDto {
  @IsDateString()
  reportDate: string;

  @IsString()
  @IsOptional()
  comments?: string;

  @IsString()
  @IsNotEmpty()
  qcName: string;

  @IsDateString()
  qcDate: string;

  @IsString()
  @IsOptional()
  verifiedBy?: string;

  @IsDateString()
  @IsOptional()
  verifiedDate?: string;
}
