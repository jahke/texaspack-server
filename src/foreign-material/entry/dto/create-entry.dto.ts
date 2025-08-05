// src/foreign-material/entry/dto/create-entry.dto.ts
import { IsString, IsInt } from 'class-validator';

export class CreateForeignMaterialEntryDto {
  @IsString()
  boatName: string;

  @IsString()
  area: string;

  @IsString()
  materialFound: string;

  @IsString()
  qcInitials: string;

  @IsInt()
  reportId: number;
}
