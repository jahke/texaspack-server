import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductEvalEntryService } from './entry.service';
import { CreateProductEvalEntryDto } from './dto/create-entry.dto';
import { UpdateProductEvalEntryDto } from './dto/update-entry.dto';

@Controller('product-eval/entry')
export class ProductEvalEntryController {
  constructor(private readonly service: ProductEvalEntryService) {}

  @Post()
  create(@Body() dto: CreateProductEvalEntryDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateProductEvalEntryDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
