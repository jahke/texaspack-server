// src/water-temp-log/entry/entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaterTempEntry } from './entities/entry.entity';
import { CreateWaterTempEntryDto } from './dto/create-entry.dto';
import { UpdateWaterTempEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(WaterTempEntry)
    private readonly repo: Repository<WaterTempEntry>,
  ) {}

  create(dto: CreateWaterTempEntryDto) {
    const entry = this.repo.create({ ...dto, report: { id: dto.reportId } });
    return this.repo.save(entry);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateWaterTempEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}