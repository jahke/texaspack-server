// src/product-quality/entry/dto/update-entry.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductQualityEntryDto } from './create-entry.dto';

export class UpdateProductQualityEntryDto extends PartialType(CreateProductQualityEntryDto) {}