// src/smart-sorter/entry/entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SmartSorterEntry } from './entities/entry.entity';
import { CreateSmartSorterEntryDto } from './dto/create-entry.dto';
import { UpdateSmartSorterEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(SmartSorterEntry)
    private readonly repo: Repository<SmartSorterEntry>,
  ) {}

  create(dto: CreateSmartSorterEntryDto) {
    const entry = this.repo.create({ ...dto, report: { id: dto.reportId } });
    return this.repo.save(entry);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateSmartSorterEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
