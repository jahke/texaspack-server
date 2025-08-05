// src/cond-pkg-bag/report/report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { CondPkgBagReport } from './entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CondPkgBagReport]),
  ],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
