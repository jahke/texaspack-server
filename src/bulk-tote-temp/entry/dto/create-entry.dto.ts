import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateBulkToteTempEntryDto {
  @IsInt()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  boatName: string;

  @IsString()
  @IsNotEmpty()
  toteNumber: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  // you can use a regex or custom validator for HH:MM AM/PM if needed
  timeIced: string;

  @IsNumber()
  toteTemp: number;

  @IsString()
  @IsOptional()
  correctiveAction?: string;
}
