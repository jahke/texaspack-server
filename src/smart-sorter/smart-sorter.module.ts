// src/smart-sorter/smart-sorter.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';
import { EntryModule } from './entry/entry.module';
import { SmartSorterReport } from './report/entities/report.entity';
import { SmartSorterEntry } from './entry/entities/entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SmartSorterReport, SmartSorterEntry]),
    ReportModule,
    EntryModule,
  ],
  exports: [],
})
export class SmartSorterModule {}
