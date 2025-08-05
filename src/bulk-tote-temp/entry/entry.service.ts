import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BulkToteTempEntry } from './entities/entry.entity';
import { CreateBulkToteTempEntryDto } from './dto/create-entry.dto';
import { UpdateBulkToteTempEntryDto } from './dto/update-entry.dto';

@Injectable()
export class BulkToteTempEntryService {
  constructor(
    @InjectRepository(BulkToteTempEntry)
    private readonly repo: Repository<BulkToteTempEntry>,
  ) {}

  create(dto: CreateBulkToteTempEntryDto) {
    const e = this.repo.create({
      ...dto,
      report: { id: dto.reportId },
    });
    return this.repo.save(e);
  }

  // New helper to filter by reportId
  findByReportId(reportId: number): Promise<BulkToteTempEntry[]> {
    return this.repo.find({
      where: { report: { id: reportId } },
      relations: ['report'],  // if you want the report object joined
    });
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateBulkToteTempEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
