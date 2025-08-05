// src/water-temp-log/report/report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaterTempReport } from './entities/report.entity';
import { CreateWaterTempReportDto } from './dto/create-report.dto';
import { UpdateWaterTempReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(WaterTempReport)
    private readonly repo: Repository<WaterTempReport>,
  ) {}

  create(dto: CreateWaterTempReportDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateWaterTempReportDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}