// src/cond-pkg-bag/bag/bag.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BagService } from './bag.service';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';

@Controller('cond-pkg-bag/bag')
export class BagController {
  constructor(private readonly bagService: BagService) {}

  @Post()
  create(@Body() dto: CreateBagDto) {
    return this.bagService.create(dto);
  }

  @Get()
  findAll() {
    return this.bagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBagDto) {
    return this.bagService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bagService.remove(+id);
  }
}
