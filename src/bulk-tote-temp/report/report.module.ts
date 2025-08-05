import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BulkToteTempReportService } from './report.service';
import { BulkToteTempReportController } from './report.controller';
import { BulkToteTempReport } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BulkToteTempReport])],
  providers: [BulkToteTempReportService],
  controllers: [BulkToteTempReportController],
  exports: [BulkToteTempReportService],
})
export class BulkToteTempReportModule {}
