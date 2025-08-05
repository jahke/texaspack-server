// src/foreign-material/report/report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ForeignMaterialReport } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ForeignMaterialReport])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
