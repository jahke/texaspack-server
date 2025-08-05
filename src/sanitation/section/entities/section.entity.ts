import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SanitationReport } from '../../report/entities/report.entity';
import { Check } from '../../check/entities/check.entity';

@Entity({ name: 'sanitationSections' })
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sectionName: string;

  @Column({ type: 'time' })
  time: string;

  @ManyToOne(() => SanitationReport, report => report.sections, {
    onDelete: 'CASCADE',
  })
  report: SanitationReport;

  @OneToMany(() => Check, check => check.section, { cascade: true })
  checks: Check[];
}
