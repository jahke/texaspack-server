// src/product-quality/entry/entry.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntryService } from './entry.service';
import { CreateProductQualityEntryDto } from './dto/create-entry.dto';
import { UpdateProductQualityEntryDto } from './dto/update-entry.dto';

@Controller('product-quality/entry')
export class EntryController {
  constructor(private readonly service: EntryService) {}

  @Post()
  create(@Body() dto: CreateProductQualityEntryDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateProductQualityEntryDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
