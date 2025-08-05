// src/scale-log/report/entities/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ScaleLogEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'scaleLogReports' })
export class ScaleLogReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  department: string;

  @Column({ type: 'date' })
  logDate: string;

  @Column({ length: 100, nullable: true })
  verifiedBy: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate: string;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @OneToMany(() => ScaleLogEntry, entry => entry.report, { cascade: true })
  entries: ScaleLogEntry[];
}