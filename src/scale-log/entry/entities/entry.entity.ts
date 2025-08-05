// src/scale-log/entry/entities/entry.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ScaleLogReport } from '../../report/entities/report.entity';

@Entity({ name: 'scaleLogEntries' })
export class ScaleLogEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  scaleNo: string;

  @Column({ type: 'time' })
  time: string;

  @Column({ length: 2 })
  reading: 'A' | 'IA';

  @Column({ default: false })
  smart: boolean;

  @Column({ default: false })
  cs: boolean;

  @Column({ default: false })
  baggerA: boolean;

  @Column({ default: false })
  baggerB: boolean;

  @Column({ default: false })
  iqf: boolean;

  @Column({ length: 100 })
  operatorInitials: string;

  @Column({ length: 100 })
  qcInitials: string;

  @ManyToOne(() => ScaleLogReport, report => report.entries, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: ScaleLogReport;
}
