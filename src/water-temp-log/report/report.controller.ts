// src/water-temp-log/report/report.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateWaterTempReportDto } from './dto/create-report.dto';
import { UpdateWaterTempReportDto } from './dto/update-report.dto';

@Controller('water-temp-log/report')
export class ReportController {
  constructor(private readonly service: ReportService) {}

  @Post()
  create(@Body() dto: CreateWaterTempReportDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateWaterTempReportDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}