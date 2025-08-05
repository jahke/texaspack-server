// src/product-quality/entry/entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductQualityEntry } from './entities/entry.entity';
import { CreateProductQualityEntryDto } from './dto/create-entry.dto';
import { UpdateProductQualityEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(ProductQualityEntry)
    private readonly repo: Repository<ProductQualityEntry>,
  ) {}

  create(dto: CreateProductQualityEntryDto) {
    const entity = this.repo.create({
      size: dto.size,
      sampleWeightOz: dto.sampleWeightOz,
      defects: dto.defects,
      totalDefectsWeightOz: dto.totalDefectsWeightOz,
      percentOfDefects: dto.percentOfDefects,
      comments: dto.comments,
      report: { id: dto.reportId },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['report'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['report'] });
  }

  update(id: number, dto: UpdateProductQualityEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
