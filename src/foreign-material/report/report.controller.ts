// src/foreign-material/report/report.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateForeignMaterialReportDto } from './dto/create-report.dto';
import { UpdateForeignMaterialReportDto } from './dto/update-report.dto';

@Controller('foreign-material/report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  create(
    @Body() createDto: CreateForeignMaterialReportDto,
  ) {
    return this.reportService.create(createDto);
  }

  @Get()
  findAll() {
    return this.reportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateForeignMaterialReportDto,
  ) {
    return this.reportService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.remove(id);
  }
}
