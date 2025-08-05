// src/scale-log/entry/entry.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { ScaleLogEntry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScaleLogEntry])],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}