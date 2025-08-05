// src/cond-pkg-bag/bag/entities/bag.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CondPkgBagReport } from '../../report/entities/report.entity';

@Entity({ name: 'condPkgBagBags' })
export class CondPkgBagBag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  bagType: string;

  @Column({ length: 10 })
  condition: 'Good' | 'Defective';

  @Column({ type: 'text', nullable: true })
  correctiveAction: string | null;

  @ManyToOne(() => CondPkgBagReport, report => report.bags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: CondPkgBagReport;
}
