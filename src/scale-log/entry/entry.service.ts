// src/scale-log/entry/entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScaleLogEntry } from './entities/entry.entity';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(ScaleLogEntry)
    private readonly repo: Repository<ScaleLogEntry>,
  ) {}

  create(dto: CreateEntryDto) {
    const entity = this.repo.create({ ...dto, report: { id: dto.reportId } });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}