// src/cond-pkg-bag/report/report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CondPkgBagReport } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(CondPkgBagReport)
    private readonly repo: Repository<CondPkgBagReport>,
  ) {}

  create(createDto: CreateReportDto) {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateDto: UpdateReportDto) {
    return this.repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
