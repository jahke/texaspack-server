import { PartialType } from '@nestjs/mapped-types';
import { CreateBulkToteTempReportDto } from './create-report.dto';

export class UpdateBulkToteTempReportDto extends PartialType(
  CreateBulkToteTempReportDto
) {}
