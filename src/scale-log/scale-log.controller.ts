// src/scale-log/scale-log.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ScaleLogService } from './scale-log.service';
import { CreateScaleLogDto } from './dto/create-scale-log.dto';

@Controller('scale-log')
export class ScaleLogController {
  constructor(private readonly service: ScaleLogService) {}

  @Post()
  create(@Body() dto: CreateScaleLogDto) {
    return this.service.create(dto);
  }
}