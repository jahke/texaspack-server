import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BulkToteTempReport } from './entities/report.entity';
import { CreateBulkToteTempReportDto } from './dto/create-report.dto';
import { UpdateBulkToteTempReportDto } from './dto/update-report.dto';

@Injectable()
export class BulkToteTempReportService {
  constructor(
    @InjectRepository(BulkToteTempReport)
    private readonly repo: Repository<BulkToteTempReport>,
  ) {}

  create(dto: CreateBulkToteTempReportDto) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateBulkToteTempReportDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
