import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BulkToteTempEntryService } from './entry.service';
import { BulkToteTempEntryController } from './entry.controller';
import { BulkToteTempEntry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BulkToteTempEntry])],
  providers: [BulkToteTempEntryService],
  controllers: [BulkToteTempEntryController],
  exports: [BulkToteTempEntryService],
})
export class BulkToteTempEntryModule {}
