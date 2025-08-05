// src/cond-pkg-bag/report/entities/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CondPkgBagPackage } from '../../package/entities/package.entity';
import { CondPkgBagBag } from '../../bag/entities/bag.entity';

@Entity({ name: 'condPkgBagReports' })
export class CondPkgBagReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  comments: string | null;

  @Column({ length: 100 })
  qcName: string;

  @Column({ type: 'date' })
  qcDate: string;

  @Column({ name: 'verifiedBy', length: 100, nullable: true })
  verifiedBy?: string;

  @Column({ name: 'verifiedDate', type: 'date', nullable: true })
  verifiedDate?: string;

  @OneToMany(() => CondPkgBagPackage, pkg => pkg.report, { cascade: true })
  packages: CondPkgBagPackage[];

  @OneToMany(() => CondPkgBagBag, bag => bag.report, { cascade: true })
  bags: CondPkgBagBag[];
}
