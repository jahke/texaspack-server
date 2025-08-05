import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CheckService } from './check.service';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';
import { Check } from './entities/check.entity';

@Controller('sanitation/check')
export class CheckController {
  constructor(private readonly svc: CheckService) {}

  @Post()
  create(@Body() dto: CreateCheckDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll(@Query('sectionId') sectionId?: string): Promise<Check[]> {
    if (sectionId !== undefined) {
      const id = Number(sectionId);
      if (!isNaN(id)) {
        return this.svc.findBySectionId(id);
      }
    }
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCheckDto,
  ) {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(+id);
  }
}
