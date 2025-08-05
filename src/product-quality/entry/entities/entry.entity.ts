// src/product-quality/entry/entities/entry.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ProductQualityReport } from '../../report/entities/report.entity';

@Entity({ name: 'productQualityEntries' })
export class ProductQualityEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => ProductQualityReport,
    report => report.entries,
    { onDelete: 'CASCADE' }
  )
  report: ProductQualityReport;

  @Column({ length: 50 })
  size: string;

  @Column('float', { nullable: true })
  sampleWeightOz: number;

  @Column('jsonb')
  defects: { label: string; weight: number }[];

  @Column('float', { nullable: true })
  totalDefectsWeightOz: number;

  @Column('float', { nullable: true })
  percentOfDefects: number;

  @Column('text', { nullable: true })
  comments?: string;
}
