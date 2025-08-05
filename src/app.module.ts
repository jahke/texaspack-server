import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SanitationModule } from './sanitation/sanitation.module';
import { SectionModule } from './sanitation/section/section.module';
import { CheckModule } from './sanitation/check/check.module';
import { ScaleLogModule } from './scale-log/scale-log.module';
import { WaterTempLogModule } from './water-temp-log/water-temp-log.module';
import { SmartSorterModule } from './smart-sorter/smart-sorter.module';


// HACCP feature
import { HaccpModule }      from './haccp/haccp.module';
import { HaccpReport }      from './haccp/entities/haccp.entity';
import { HaccpInspection }  from './haccp/inspection/entities/inspection.entity';
import { SmartSorterReport } from './smart-sorter/report/entities/report.entity';
import { SmartSorterEntry } from './smart-sorter/entry/entities/entry.entity';
import { ForeignMaterialModule } from './foreign-material/foreign-material.module';
import { ForeignMaterialReport } from './foreign-material/report/entities/report.entity';
import { ForeignMaterialEntry  } from './foreign-material/entry/entities/entry.entity';
import { ProductEvalModule } from './product-eval/product-eval.module';
import { ProductQualityModule } from './product-quality/product-quality.module';
import { ProductQualityReport } from './product-quality/report/entities/report.entity';
import { ProductQualityEntry } from './product-quality/entry/entities/entry.entity';
import { CondPkgBagModule } from './cond-pkg-bag/cond-pkg-bag.module';
import { CondPkgBagReport } from './cond-pkg-bag/report/entities/report.entity';
import { CondPkgBagPackage } from './cond-pkg-bag/package/entities/package.entity';
import { CondPkgBagBag } from './cond-pkg-bag/bag/entities/bag.entity';
import { BulkToteTempModule } from './bulk-tote-temp//bulk-tote-temp.module';
import { BulkToteTempReport } from './bulk-tote-temp/report/entities/report.entity';
import { BulkToteTempEntry }  from './bulk-tote-temp/entry/entities/entry.entity';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configure TypeORM with Postgres
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'teddy123',
      database: process.env.DB_NAME || 'texaspack',
      entities: [
        HaccpReport, HaccpInspection, 
        SmartSorterReport, SmartSorterEntry, 
        ForeignMaterialEntry, ForeignMaterialReport, 
        ProductQualityReport, ProductQualityEntry,
        CondPkgBagReport, CondPkgBagPackage, CondPkgBagBag,
        BulkToteTempReport, BulkToteTempEntry,

      ],
      autoLoadEntities: true,
      synchronize: true,  // auto-create database schema (dev only)
    }),
    // Import feature module
    SanitationModule,
    SectionModule,
    CheckModule,
    HaccpModule,
    ScaleLogModule,
    WaterTempLogModule,
    SmartSorterModule,
    ForeignMaterialModule,
    ProductEvalModule,
    ProductQualityModule,
    CondPkgBagModule,
    BulkToteTempModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
