import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEvalEntryService } from './entry.service';
import { ProductEvalEntryController } from './entry.controller';
import { ProductEvalEntry } from './entities/entry.entity';
import { ProductEvalReport } from '../report/entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEvalEntry, ProductEvalReport]),
  ],
  controllers: [ProductEvalEntryController],
  providers: [ProductEvalEntryService],
})
export class ProductEvalEntryModule {}
