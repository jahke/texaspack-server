// src/foreign-material/entry/entry.controller.ts
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
import { EntryService } from './entry.service';
import { CreateForeignMaterialEntryDto } from './dto/create-entry.dto';
import { UpdateForeignMaterialEntryDto } from './dto/update-entry.dto';

@Controller('foreign-material/entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post()
  create(
    @Body() createDto: CreateForeignMaterialEntryDto,
  ) {
    return this.entryService.create(createDto);
  }

  @Get()
  findAll() {
    return this.entryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateForeignMaterialEntryDto,
  ) {
    return this.entryService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.entryService.remove(id);
  }
}
