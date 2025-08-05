import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BulkToteTempReportModule } from './report/report.module';
import { BulkToteTempEntryModule }  from './entry/entry.module';

import { BulkToteTempReport } from './report/entities/report.entity';
import { BulkToteTempEntry }  from './entry/entities/entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BulkToteTempReport,
      BulkToteTempEntry,
    ]),
    BulkToteTempReportModule,
    BulkToteTempEntryModule,
  ],
})
export class BulkToteTempModule {}
