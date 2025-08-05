// src/cond-pkg-bag/bag/bag.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BagController } from './bag.controller';
import { BagService } from './bag.service';
import { CondPkgBagBag } from './entities/bag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CondPkgBagBag]),
  ],
  controllers: [BagController],
  providers: [BagService],
  exports: [BagService],
})
export class BagModule {}
