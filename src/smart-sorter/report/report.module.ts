// src/smart-sorter/report/report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { SmartSorterReport } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmartSorterReport])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}