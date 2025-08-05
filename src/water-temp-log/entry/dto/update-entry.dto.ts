// src/water-temp-log/entry/dto/update-entry.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterTempEntryDto } from './create-entry.dto';

export class UpdateWaterTempEntryDto extends PartialType(CreateWaterTempEntryDto) {}
