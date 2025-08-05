import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BulkToteTempReport } from '../../report/entities/report.entity';

@Entity({ name: 'bulkToteTempEntries' })
export class BulkToteTempEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boatName: string;

  @Column()
  toteNumber: string;

  @Column()
  size: string;

  @Column({ type: 'time' })
  timeIced: string;

  @Column({ type: 'real' })
  toteTemp: number;

  @Column({ type: 'text', nullable: true })
  correctiveAction: string | null;

  @ManyToOne(
    () => BulkToteTempReport,
    report => report.entries,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'reportId' })
  report: BulkToteTempReport;
}
