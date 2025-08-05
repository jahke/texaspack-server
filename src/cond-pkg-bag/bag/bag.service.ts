// src/cond-pkg-bag/bag/bag.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CondPkgBagBag } from './entities/bag.entity';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';

@Injectable()
export class BagService {
  constructor(
    @InjectRepository(CondPkgBagBag)
    private readonly repo: Repository<CondPkgBagBag>,
  ) {}

  create(dto: CreateBagDto) {
    const entity = this.repo.create({
      bagType: dto.bagType,
      condition: dto.condition,
      correctiveAction: dto.correctiveAction ?? null,
      report: { id: dto.reportId },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateBagDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
