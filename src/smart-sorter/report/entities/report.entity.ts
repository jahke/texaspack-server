// src/smart-sorter/report/entities/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SmartSorterEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'smartSorterReports' })
export class SmartSorterReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  sorter1: number;

  @Column({ type: 'int' })
  sorter2: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ length: 100 })
  boatName: string;

  @Column({ type: 'int' })
  qty: number;

  @Column({ length: 50 })
  boatId: string;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 50 })
  color: string;

  @Column({ length: 50 })
  dateCode: string;

  @Column({ type: 'text', nullable: true })
  actionTaken: string;

  @Column({ length: 100, nullable: true })
  verifiedBy: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate: string;

  @Column('text', { array: true, nullable: true })
  qcInitials: string[];

  @OneToMany(() => SmartSorterEntry, entry => entry.report, { cascade: true })
  entries: SmartSorterEntry[];
}