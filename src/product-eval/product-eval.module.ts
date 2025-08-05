// src/product-eval/product-eval.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEvalReportModule } from './report/report.module';
import { ProductEvalEntryModule } from './entry/entry.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([]), // no entities directly here
    ProductEvalReportModule,
    ProductEvalEntryModule,
  ],
  exports: [],
})
export class ProductEvalModule {}