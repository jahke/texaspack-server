// src/water-temp-log/entry/entry.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { WaterTempEntry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WaterTempEntry])],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}