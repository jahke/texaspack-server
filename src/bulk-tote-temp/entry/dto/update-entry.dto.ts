import { PartialType } from '@nestjs/mapped-types';
import { CreateBulkToteTempEntryDto } from './create-entry.dto';

export class UpdateBulkToteTempEntryDto extends PartialType(
  CreateBulkToteTempEntryDto,
) {}
