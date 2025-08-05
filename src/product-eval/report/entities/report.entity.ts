import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'productEvaluationReports' })
export class ProductEvalReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  brand: string;

  @Column({ type: 'time' })
  timeIn: string;

  @Column({ type: 'time' })
  timeOut: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 50 })
  boatNumber: string;

  @Column({ length: 100 })
  boatName: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'date' })
  reportDate: string;

  @Column({ length: 50 })
  species: string;

  @Column({ length: 50 })
  boatId: string;

  @Column({ length: 50 })
  size: string;

  @Column({ type: 'text', nullable: true })
  comments?: string;

  @Column({ length: 100 })
  qcName: string;

  @Column({ type: 'date' })
  qcDate: string;

  @Column({ length: 100, nullable: true })
  verifiedBy?: string;

  @Column({ type: 'date', nullable: true })
  verifiedDate?: string;
}
