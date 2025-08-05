// src/cond-pkg-bag/package/dto/create-package.dto.ts
import { IsString, IsNotEmpty, IsIn, IsOptional, IsInt } from 'class-validator';

export class CreatePackageDto {
  @IsInt()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsIn(['Good', 'Defective'])
  condition: 'Good' | 'Defective';

  @IsString()
  @IsOptional()
  correctiveAction?: string;
}
