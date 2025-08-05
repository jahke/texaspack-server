// src/smart-sorter/entry/dto/update-entry.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartSorterEntryDto } from './create-entry.dto';

export class UpdateSmartSorterEntryDto extends PartialType(CreateSmartSorterEntryDto) {}
