import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Section } from '../../section/entities/section.entity';

@Entity({ name: 'sanitationReports' })
export class SanitationReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ length: 100 })
  qcInspector: string;

  @Column({ type: 'date' })
  qcInspectorDate: string;

  @Column({ length: 100 })
  washCrewRep: string;

  @Column({ type: 'date' })
  washCrewRepDate: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  verifiedBy: string | null;

  @Column({ type: 'date', nullable: true })
  verifiedDate: string | null;

  @OneToMany(() => Section, section => section.report, { cascade: true })
  sections: Section[];
}
