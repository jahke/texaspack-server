// src/smart-sorter/entry/entities/entry.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SmartSorterReport } from '../../report/entities/report.entity';

@Entity({ name: 'smartSorterEntries' })
export class SmartSorterEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  size: string;

  @Column({ type: 'int' })
  units: number;

  @Column({ type: 'int' })
  count: number;

  @Column({ type: 'int' })
  uniformity: number;

  @ManyToOne(() => SmartSorterReport, report => report.entries, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: SmartSorterReport;
}