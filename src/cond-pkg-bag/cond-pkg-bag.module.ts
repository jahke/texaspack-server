// src/cond-pkg-bag/cond-pkg-bag.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReportModule } from './report/report.module';
import { PackageModule } from './package/package.module';
import { BagModule } from './bag/bag.module';

import { CondPkgBagReport } from './report/entities/report.entity';
import { CondPkgBagPackage } from './package/entities/package.entity';
import { CondPkgBagBag } from './bag/entities/bag.entity';

@Module({
  imports: [
    // register the three entities so TypeORM knows about them
    TypeOrmModule.forFeature([
      CondPkgBagReport,
      CondPkgBagPackage,
      CondPkgBagBag,
    ]),
    ReportModule,
    PackageModule,
    BagModule,
  ],
})
export class CondPkgBagModule {}
