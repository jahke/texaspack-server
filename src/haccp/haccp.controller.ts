import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HaccpService } from './haccp.service';
import { CreateHaccpDto } from './dto/create-haccp.dto';
import { UpdateHaccpDto } from './dto/update-haccp.dto';

@Controller('haccp')
export class HaccpController {
  constructor(private readonly haccpService: HaccpService) {}

  @Post()
  create(@Body() createHaccpDto: CreateHaccpDto) {
    return this.haccpService.create(createHaccpDto);
  }

  @Get()
  findAll() {
    return this.haccpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.haccpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHaccpDto: UpdateHaccpDto) {
    return this.haccpService.update(+id, updateHaccpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.haccpService.remove(+id);
  }
}
