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
import { BulkToteTempEntryService } from './entry.service';
import { CreateBulkToteTempEntryDto } from './dto/create-entry.dto';
import { UpdateBulkToteTempEntryDto } from './dto/update-entry.dto';
import { BulkToteTempEntry } from './entities/entry.entity';

@Controller('bulk-tote-temp/entry')
export class BulkToteTempEntryController {
  constructor(
    private readonly svc: BulkToteTempEntryService,
  ) {}

  @Post()
  create(@Body() dto: CreateBulkToteTempEntryDto) {
    return this.svc.create(dto);
  }

  @Get()
  async findAll(@Query('reportId') reportId?: string): Promise<BulkToteTempEntry[]> {
    // If reportId was provided, convert to number and pass it.
    if (reportId) {
      return this.svc.findByReportId(+reportId);
    }
    // Otherwise return all
    return this.svc.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBulkToteTempEntryDto,
  ) {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(+id);
  }
}
