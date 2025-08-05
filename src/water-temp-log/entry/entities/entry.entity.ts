// src/water-temp-log/entry/entities/entry.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WaterTempReport } from '../../report/entities/report.entity';

@Entity({ name: 'waterTempEntries' })
export class WaterTempEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  time: string;

  @Column({ length: 100 })
  boatName: string;

  @Column({ type: 'real', nullable: true })
  thaw1Water: number;

  @Column({ type: 'real', nullable: true })
  thaw2Water: number;

  @Column({ type: 'real', nullable: true })
  feed1Water: number;

  @Column({ type: 'real', nullable: true })
  feed1Product: number;

  @Column({ type: 'real', nullable: true })
  feed2Water: number;

  @Column({ type: 'real', nullable: true })
  feed2Product: number;

  @Column({ type: 'real', nullable: true })
  recirc1Water: number;

  @Column({ type: 'real', nullable: true })
  recirc2Water: number;

  @Column({ length: 100 })
  qcInitials: string;

  @ManyToOne(() => WaterTempReport, report => report.entries, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: WaterTempReport;
}