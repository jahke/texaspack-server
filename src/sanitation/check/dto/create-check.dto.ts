import {
  IsString,
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateCheckDto {
  @IsString()
  @IsNotEmpty()
  itemLabel: string;

  @IsIn(['S', 'A', 'U'], { message: 'Status must be S, A, or U' })
  status: 'S' | 'A' | 'U';

  @IsString()
  @IsOptional()
  immediateAction?: string;

  @IsInt()
  sectionId: number;
}
