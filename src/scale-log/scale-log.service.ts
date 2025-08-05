// src/scale-log/scale-log.service.ts
import { Injectable } from '@nestjs/common';
import { ReportService } from './report/report.service';
import { EntryService } from './entry/entry.service';
import { CreateScaleLogDto } from './dto/create-scale-log.dto';

@Injectable()
export class ScaleLogService {
  constructor(
    private readonly reportService: ReportService,
    private readonly entryService: EntryService,
  ) {}

  async create(createDto: CreateScaleLogDto) {
    // 1. create report
    const report = await this.reportService.create({
      department: createDto.department,
      logDate: createDto.logDate,
      verifiedBy: createDto.verifiedBy,
      verifiedDate: createDto.verifiedDate,
      comments: createDto.comments,
    });
    // 2. create entries
    await Promise.all(
      createDto.entries.map(e =>
        this.entryService.create({
          reportId: report.id,
          scaleNo: e.scaleNo,
          time: e.time,
          reading: e.reading,
          smart: e.smart,
          cs: e.cs,
          baggerA: e.baggerA,
          baggerB: e.baggerB,
          iqf: e.iqf,
          operatorInitials: e.operatorInitials,
          qcInitials: e.qcInitials,
        }),
      ),
    );
    return { id: report.id };
  }
}