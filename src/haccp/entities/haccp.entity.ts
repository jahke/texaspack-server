// src/haccp/entities/haccp-report.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HaccpInspection } from '../inspection/entities/inspection.entity';

@Entity({ name: 'haccpReports' })
export class HaccpReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  department: string;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ type: 'text', nullable: true })
  actionTaken?: string;

  @Column({ length: 100, nullable: true })
  verifiedBy?: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate?: string;

  @OneToMany(() => HaccpInspection, inspection => inspection.report)
  inspections: HaccpInspection[];
}
