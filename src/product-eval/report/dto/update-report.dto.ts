import { PartialType } from '@nestjs/mapped-types';
import { CreateProductEvalReportDto } from './create-report.dto';

export class UpdateProductEvalReportDto extends PartialType(CreateProductEvalReportDto) {}
