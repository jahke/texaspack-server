// src/water-temp-log/report/entities/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WaterTempEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'waterTempReports' })
export class WaterTempReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ length: 100, nullable: true })
  verifiedBy: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate: string;

  @Column({ type: 'text', nullable: true })
  actionTaken: string;

  @OneToMany(() => WaterTempEntry, entry => entry.report, { cascade: true })
  entries: WaterTempEntry[];
}
