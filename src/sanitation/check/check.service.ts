import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Check } from './entities/check.entity';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';

@Injectable()
export class CheckService {
  constructor(
    @InjectRepository(Check)
    private readonly repo: Repository<Check>,
  ) {}

  create(dto: CreateCheckDto) {
    const ent = this.repo.create({ ...dto, section: { id: dto.sectionId } });
    return this.repo.save(ent);
  }

  findAll(): Promise<Check[]> {
    return this.repo.find({ relations: ['section'] });
  }

  findBySectionId(sectionId: number): Promise<Check[]> {
    return this.repo.find({
      where: { section: { id: sectionId } },
    });
  }

  findOne(id: number): Promise<Check | null> {
    return this.repo.findOne({
      where: { id },
      relations: ['section'],
    });
  }

  update(id: number, dto: UpdateCheckDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  } 
}
