import { PartialType } from '@nestjs/mapped-types';
import { CreateProductEvalEntryDto } from './create-entry.dto';

export class UpdateProductEvalEntryDto extends PartialType(CreateProductEvalEntryDto) {}
