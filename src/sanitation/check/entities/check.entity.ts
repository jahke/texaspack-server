// src/sanitation/check/entities/check.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Section } from '../../section/entities/section.entity';

@Entity({ name: 'sanitationChecks' })
export class Check {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemLabel: string;

  @Column({
    length: 1,
    nullable: true,          // <-- allow existing nulls
    default: 'S',            // <-- new rows will default to 'S'
  })
  status: 'S' | 'A' | 'U';

  // ← explicitly mark as text and nullable
  @Column({ type: 'text', nullable: true })
  immediateAction?: string | null;

  @ManyToOne(() => Section, sec => sec.checks, { onDelete: 'CASCADE' })
  section: Section;
}
