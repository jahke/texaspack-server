import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEvalReportService } from './report.service';
import { ProductEvalReportController } from './report.controller';
import { ProductEvalReport } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEvalReport])],
  controllers: [ProductEvalReportController],
  providers: [ProductEvalReportService],
  exports: [ProductEvalReportService],
})
export class ProductEvalReportModule {}
