// src/product-quality/entry/entry.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { ProductQualityEntry } from './entities/entry.entity';
import { ReportModule } from '../report/report.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductQualityEntry]),
    forwardRef(() => ReportModule),
  ],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}
