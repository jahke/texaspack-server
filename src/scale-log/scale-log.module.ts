// src/scale-log/scale-log.module.ts
import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { EntryModule } from './entry/entry.module';
import { ScaleLogService } from './scale-log.service';
import { ScaleLogController } from './scale-log.controller';

@Module({
  imports: [ReportModule, EntryModule],
  providers: [ScaleLogService],
  controllers: [ScaleLogController],
})
export class ScaleLogModule {}