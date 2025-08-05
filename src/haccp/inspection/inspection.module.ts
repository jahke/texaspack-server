// src/haccp/inspection/inspection.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HaccpInspection } from './entities/inspection.entity';
import { InspectionService } from './inspection.service';
import { InspectionController } from './inspection.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([HaccpInspection]),
  ],
  controllers: [InspectionController],
  providers: [InspectionService],
  exports: [InspectionService],
})
export class InspectionModule {}
