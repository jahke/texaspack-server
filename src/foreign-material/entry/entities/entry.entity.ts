// src/foreign-material/entry/entities/entry.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ForeignMaterialReport } from '../../report/entities/report.entity';

@Entity({ name: 'foreignMaterialEntries' })
export class ForeignMaterialEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boatName: string;

  @Column()
  area: string;

  @Column()
  materialFound: string;

  @Column()
  qcInitials: string;

  @ManyToOne(
    () => ForeignMaterialReport,
    report => report.entries,
    { onDelete: 'CASCADE' },
  )
  report: ForeignMaterialReport;
}
