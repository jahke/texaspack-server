import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { BulkToteTempReportService } from './report.service';
import { CreateBulkToteTempReportDto } from './dto/create-report.dto';
import { UpdateBulkToteTempReportDto } from './dto/update-report.dto';

@Controller('bulk-tote-temp/report')
export class BulkToteTempReportController {
  constructor(
    private readonly svc: BulkToteTempReportService,
  ) {}

  @Post()
  create(@Body() dto: CreateBulkToteTempReportDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBulkToteTempReportDto,
  ) {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(+id);
  }
} 
