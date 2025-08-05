// src/haccp/inspection/inspection.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HaccpInspection } from './entities/inspection.entity';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';

@Injectable()
export class InspectionService {
  constructor(
    @InjectRepository(HaccpInspection)
    private readonly repo: Repository<HaccpInspection>,
  ) {}

  /** Create a new inspection tied to a HACCP report */
  async create(createDto: CreateInspectionDto) {
    // pull out reportId and the rest of the fields
    const { reportId, ...rest } = createDto;

    // explicitly assign the relation
    const inspection = this.repo.create({
      ...rest,
      report: { id: reportId },    // <-- this populates report_id
    });

    return this.repo.save(inspection);
  }

  /** Return all inspections */
  findAll() {
    return this.repo.find();
  }

  /** Return one inspection by ID */
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  /** Update an existing inspection */
  update(id: number, updateDto: UpdateInspectionDto) {
    return this.repo.update(id, updateDto);
  }

  /** Delete an inspection */
  remove(id: number) {
    return this.repo.delete(id);
  }
}
