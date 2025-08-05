// src/smart-sorter/report/dto/update-report.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartSorterReportDto } from './create-report.dto';

export class UpdateSmartSorterReportDto extends PartialType(CreateSmartSorterReportDto) {}