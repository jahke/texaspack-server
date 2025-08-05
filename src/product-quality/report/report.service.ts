// src/product-quality/report/report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductQualityReport } from './entities/report.entity';
import { CreateProductQualityReportDto } from './dto/create-report.dto';
import { UpdateProductQualityReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ProductQualityReport)
    private readonly repo: Repository<ProductQualityReport>,
  ) {}

  create(dto: CreateProductQualityReportDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['entries'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['entries'] });
  }

  update(id: number, dto: UpdateProductQualityReportDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}