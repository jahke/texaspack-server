// src/cond-pkg-bag/package/package.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { CondPkgBagPackage } from './entities/package.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CondPkgBagPackage]),
  ],
  controllers: [PackageController],
  providers: [PackageService],
  exports: [PackageService],
})
export class PackageModule {}
