// src/cond-pkg-bag/package/entities/package.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CondPkgBagReport } from '../../report/entities/report.entity';

@Entity({ name: 'condPkgBagPackages' })
export class CondPkgBagPackage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 10 })
  condition: 'Good' | 'Defective';

  @Column({ type: 'text', nullable: true })
  correctiveAction: string | null;

  @ManyToOne(() => CondPkgBagReport, report => report.packages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: CondPkgBagReport;
}
