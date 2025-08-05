import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReportModule } from './report/report.module';
import { SectionModule }           from './section/section.module';
import { CheckModule }             from './check/check.module';

import { SanitationReport } from './report/entities/report.entity';
import { Section }          from './section/entities/section.entity';
import { Check }            from './check/entities/check.entity';

@Module({
  imports: [
    // register all three entities so that nested relations can be created
    TypeOrmModule.forFeature([
      SanitationReport,
      Section,
      Check,
    ]),
    ReportModule,
    SectionModule,
    CheckModule,
  ],
})
export class SanitationModule {}
