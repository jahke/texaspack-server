import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @IsNotEmpty()
  sectionName: string;

  @IsString()
  @IsNotEmpty()
  time: string; // e.g. "07:30 AM"

  @IsInt()
  reportId: number;
}
