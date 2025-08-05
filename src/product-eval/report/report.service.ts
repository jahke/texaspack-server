import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEvalReport } from './entities/report.entity';
import { CreateProductEvalReportDto } from './dto/create-report.dto';
import { UpdateProductEvalReportDto } from './dto/update-report.dto';

@Injectable()
export class ProductEvalReportService {
  constructor(
    @InjectRepository(ProductEvalReport)
    private readonly repo: Repository<ProductEvalReport>,
  ) {}

  create(createDto: CreateProductEvalReportDto) {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateDto: UpdateProductEvalReportDto) {
    return this.repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
