// src/foreign-material/entry/entry.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { ForeignMaterialEntry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ForeignMaterialEntry])],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}
