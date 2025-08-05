// src/cond-pkg-bag/bag/dto/create-bag.dto.ts
import { IsInt, IsString, IsNotEmpty, IsIn, IsOptional } from 'class-validator';

export class CreateBagDto {
  @IsInt()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  bagType: string;

  @IsIn(['Good', 'Defective'])
  condition: 'Good' | 'Defective';

  @IsString()
  @IsOptional()
  correctiveAction?: string;
}
