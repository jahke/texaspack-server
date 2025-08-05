// src/product-quality/report/entities/report.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ProductQualityEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'productQualityReports' })
export class ProductQualityReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable:true })
  boatNumber: string;

  @Column({ length: 20 })
  freezerIce: string;

  @Column('int')
  quantity: number;

  @Column('date')
  reportDate: string;

  @Column({ length: 100 })
  boatName: string;

  @Column({ length: 100 }) 
  boatId: string;

  @Column({ length: 100 })
  brand: string;

  @Column('bool')
  quality: boolean;

  @Column('bool')
  regular: boolean;

  @Column('time')
  timeIn: string;

  @Column('time')
  timeOut: string;

  @Column({ length: 100 })
  qcName: string;

  @Column('date')
  qcDate: string;

  @Column({ length: 100, nullable: true })
  verifiedBy?: string;

  @Column('date', { nullable: true })
  verifiedDate?: string;

  @OneToMany(
    () => ProductQualityEntry,
    entry => entry.report,
    { cascade: true }
  )
  entries: ProductQualityEntry[];
}
