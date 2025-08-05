// src/foreign-material/foreign-material.module.ts

import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    ReportModule,
    EntryModule,
  ],
})
export class ForeignMaterialModule {}
