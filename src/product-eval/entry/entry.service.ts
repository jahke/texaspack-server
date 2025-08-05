// src/product-eval/entry/product-eval-entry.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEvalEntry } from './entities/entry.entity';
import { CreateProductEvalEntryDto } from './dto/create-entry.dto';
import { UpdateProductEvalEntryDto } from './dto/update-entry.dto';

@Injectable()
export class ProductEvalEntryService {
  constructor(
    @InjectRepository(ProductEvalEntry)
    private readonly repo: Repository<ProductEvalEntry>,
  ) {}

  create(dto: CreateProductEvalEntryDto) {
    const entity = this.repo.create({
      timeSampleCheck: dto.timeSampleCheck,
      netWeightOz: dto.netWeightOz,
      totalCount5lb: dto.totalCount5lb,
      actualCountPerLb: dto.actualCountPerLb,
      dehydrationOz: dto.dehydrationOz,
      dehydrationPct: dto.dehydrationPct,
      inadvertentlyPeeledOz: dto.inadvertentlyPeeledOz,
      inadvertentlyPeeledPct: dto.inadvertentlyPeeledPct,
      tailFinsMissingOz: dto.tailFinsMissingOz,
      tailFinsMissingPct: dto.tailFinsMissingPct,
      brokenTailsOz: dto.brokenTailsOz,
      brokenTailsPct: dto.brokenTailsPct,
      brokenDamagedOz: dto.brokenDamagedOz,
      brokenDamagedPct: dto.brokenDamagedPct,
      piecesOz: dto.piecesOz,
      piecesPct: dto.piecesPct,
      unusableMaterialOz: dto.unusableMaterialOz,
      unusableMaterialPct: dto.unusableMaterialPct,
      redShrimpOz: dto.redShrimpOz,
      redShrimpPct: dto.redShrimpPct,
      blackSpotsShellOz: dto.blackSpotsShellOz,
      blackSpotsShellPct: dto.blackSpotsShellPct,
      blackSpotsMeatOz: dto.blackSpotsMeatOz,
      blackSpotsMeatPct: dto.blackSpotsMeatPct,
      textureOz: dto.textureOz,
      texturePct: dto.texturePct,
      uniformityLarge: dto.uniformityLarge,
      uniformitySmall: dto.uniformitySmall,
      ratio: dto.ratio,
      odor: dto.odor,
      flavor: dto.flavor,
      extraneousMaterial: dto.extraneousMaterial,
      sampleCount: dto.sampleCount,
      uniformityText: dto.uniformityText,
      actionTaken: dto.actionTaken,
      supervisorSignature: dto.supervisorSignature,
      report: { id: dto.reportId },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['report'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['report'] });
  }

  update(id: number, dto: UpdateProductEvalEntryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
