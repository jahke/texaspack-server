// src/scale-log/report/report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ScaleLogReport } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScaleLogReport])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}