// src/foreign-material/entry/entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForeignMaterialEntry } from './entities/entry.entity';
import { CreateForeignMaterialEntryDto } from './dto/create-entry.dto';
import { UpdateForeignMaterialEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(ForeignMaterialEntry)
    private readonly repo: Repository<ForeignMaterialEntry>,
  ) {}

  create(createDto: CreateForeignMaterialEntryDto) {
    const entity = this.repo.create({
      boatName: createDto.boatName,
      area: createDto.area,
      materialFound: createDto.materialFound,
      qcInitials: createDto.qcInitials,
      report: { id: createDto.reportId },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateDto: UpdateForeignMaterialEntryDto) {
    return this.repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
