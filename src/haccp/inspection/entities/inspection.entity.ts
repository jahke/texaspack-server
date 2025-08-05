// src/haccp/inspection/entities/inspection.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { HaccpReport } from '../../entities/haccp.entity';

@Entity({ name: 'haccpInspections' })
export class HaccpInspection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  time: string;

  @Column({ length: 255 })
  brand: string;

  @Column({ type: 'boolean', default: false })
  sulfiteDeclared: boolean;

  @Column({ type: 'boolean', default: false })
  shrimpDeclared: boolean;

  @Column({ type: 'char', length: 1 })
  masterOrPackage: 'M' | 'P';

  @Column({ type: 'int' })
  numberInspected: number;

  @Column({ length: 10 })
  qcInitials: string;

  @ManyToOne(() => HaccpReport, (report) => report.inspections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'reportId' })
  report: HaccpReport;
}
