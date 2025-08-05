// src/cond-pkg-bag/package/package.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CondPkgBagPackage } from './entities/package.entity';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(CondPkgBagPackage)
    private readonly repo: Repository<CondPkgBagPackage>,
  ) {}

  create(dto: CreatePackageDto) {
    const entity = this.repo.create({
      brand: dto.brand,
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

  update(id: number, dto: UpdatePackageDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
