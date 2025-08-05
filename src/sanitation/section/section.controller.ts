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
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('sanitation/section')
export class SectionController {
  constructor(private readonly svc: SectionService) {}

  @Post()
  create(@Body() dto: CreateSectionDto) {
    return this.svc.create(dto);
  }

  // ✏️ Accept optional ?reportId= so +id is never NaN
  @Get()
  async findAll(@Query('reportId') reportId?: string) {
    if (reportId) {
      return this.svc.findByReportId(+reportId);
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
    @Body() dto: UpdateSectionDto,
  ) {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(+id);
  }
}
