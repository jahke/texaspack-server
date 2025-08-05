import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { BulkToteTempEntry } from '../../entry/entities/entry.entity';

@Entity({ name: 'bulkToteTempReports' })
export class BulkToteTempReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ type: 'text', nullable: true })
  comments: string | null;

  @Column({ length: 100 })
  qcName: string;

  @Column({ type: 'date' })
  qcDate: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  verifiedBy: string | null;

  @Column({ type: 'date', nullable: true })
  verifiedDate: string | null;

  @OneToMany(() => BulkToteTempEntry, e => e.report, { cascade: true })
  entries: BulkToteTempEntry[];
}
