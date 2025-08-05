// src/foreign-material/report/entities/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ForeignMaterialEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'foreignMaterialReports' })
export class ForeignMaterialReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ type: 'text', nullable: true })
  actionTaken?: string;

  @Column({ length: 100, nullable: true })
  verifiedBy?: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate?: string;

  @OneToMany(
    () => ForeignMaterialEntry,
    entry => entry.report,
    { cascade: true },
  )
  entries?: ForeignMaterialEntry[];
}
