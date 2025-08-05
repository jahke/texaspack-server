// src/foreign-material/report/report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForeignMaterialReport } from './entities/report.entity';
import { CreateForeignMaterialReportDto } from './dto/create-report.dto';
import { UpdateForeignMaterialReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ForeignMaterialReport)
    private readonly repo: Repository<ForeignMaterialReport>,
  ) {}

  create(createDto: CreateForeignMaterialReportDto) {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateDto: UpdateForeignMaterialReportDto) {
    return this.repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
