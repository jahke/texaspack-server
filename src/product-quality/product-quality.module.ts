// src/product-quality/product-quality.module.ts
import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    // bring in both sub-modules
    ReportModule,
    EntryModule,
  ],
})
export class ProductQualityModule {}
