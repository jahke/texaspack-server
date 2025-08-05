// src/water-temp-log/water-temp-log.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';
import { EntryModule } from './entry/entry.module';
import { WaterTempReport } from './report/entities/report.entity';
import { WaterTempEntry } from './entry/entities/entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WaterTempReport, WaterTempEntry]),
    ReportModule,
    EntryModule,
  ],
  exports: [],
})
export class WaterTempLogModule {}