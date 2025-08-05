// src/haccp/haccp.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HaccpReport } from './entities/haccp.entity';
import { CreateHaccpDto } from './dto/create-haccp.dto';

@Injectable()
export class HaccpService {
  constructor(
    @InjectRepository(HaccpReport)
    private readonly repo: Repository<HaccpReport>,
  ) {}

  /** Create a new HACCP report */
  create(createDto: CreateHaccpDto) {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  /** Return all HACCP reports */
  findAll() {
    return this.repo.find();
  }

  /** Return one report by ID */
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  /** Update an existing report */
  update(id: number, updateDto: Partial<CreateHaccpDto>) {
    return this.repo.update(id, updateDto);
  }

  /** Delete a report */
  remove(id: number) {
    return this.repo.delete(id);
  }
}
