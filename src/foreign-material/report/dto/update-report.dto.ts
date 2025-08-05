// src/foreign-material/report/dto/update-report.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateForeignMaterialReportDto } from './create-report.dto';

export class UpdateForeignMaterialReportDto extends PartialType(CreateForeignMaterialReportDto) {}
