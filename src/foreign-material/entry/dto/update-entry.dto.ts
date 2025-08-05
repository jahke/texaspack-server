// src/foreign-material/entry/dto/update-entry.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateForeignMaterialEntryDto } from './create-entry.dto';

export class UpdateForeignMaterialEntryDto extends PartialType(
  CreateForeignMaterialEntryDto,
) {}
