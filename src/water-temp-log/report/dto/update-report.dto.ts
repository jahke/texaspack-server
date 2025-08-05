// src/water-temp-log/report/dto/update-report.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterTempReportDto } from './create-report.dto';

export class UpdateWaterTempReportDto extends PartialType(CreateWaterTempReportDto) {}