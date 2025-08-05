// src/smart-sorter/report/report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SmartSorterReport } from './entities/report.entity';
import { CreateSmartSorterReportDto } from './dto/create-report.dto';
import { UpdateSmartSorterReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(SmartSorterReport)
    private readonly repo: Repository<SmartSorterReport>,
  ) {}

  create(dto: CreateSmartSorterReportDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateSmartSorterReportDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}