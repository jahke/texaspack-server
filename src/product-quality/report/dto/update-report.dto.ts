// src/product-quality/report/dto/update-report.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductQualityReportDto } from './create-report.dto';

export class UpdateProductQualityReportDto extends PartialType(CreateProductQualityReportDto) {}