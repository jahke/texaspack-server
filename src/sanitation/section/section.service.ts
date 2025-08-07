import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './entities/section.entity';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly repo: Repository<Section>,
  ) {}

  create(dto: CreateSectionDto) {
  const section = this.repo.create({
    sectionName: dto.sectionName,
    time: dto.time,
    // explicitly set the relation here:
    report: { id: dto.reportId },
  });
  return this.repo.save(section);
}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['checks'] });
  }

  update(id: number, dto: UpdateSectionDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  // new helper to filter by reportId
  findByReportId(reportId: number) {
    return this.repo.find({
      where: { report: { id: reportId } },
      relations: ['checks'],
    });
  }
}
