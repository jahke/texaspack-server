import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductEvalReportService } from './report.service';
import { CreateProductEvalReportDto } from './dto/create-report.dto';
import { UpdateProductEvalReportDto } from './dto/update-report.dto';

@Controller('product-eval/report')
export class ProductEvalReportController {
  constructor(private readonly service: ProductEvalReportService) {}

  @Post()
  create(@Body() dto: CreateProductEvalReportDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductEvalReportDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
