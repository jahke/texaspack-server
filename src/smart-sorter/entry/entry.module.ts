// src/smart-sorter/entry/entry.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { SmartSorterEntry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmartSorterEntry])],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}