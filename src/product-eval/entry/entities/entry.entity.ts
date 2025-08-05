import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductEvalReport } from '../../report/entities/report.entity';

@Entity({ name: 'productEvaluationEntries' })
export class ProductEvalEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEvalReport, rpt => rpt.id, { onDelete: 'CASCADE' })
  report: ProductEvalReport;

  @Column({ type: 'time' })
  timeSampleCheck: string;

  @Column({ type: 'real' })
  netWeightOz: number;

  @Column({ type: 'int' })
  totalCount5lb: number;

  @Column({ type: 'real' })
  actualCountPerLb: number;

  @Column({ type: 'real' })
  dehydrationOz: number;

  @Column({ type: 'real' })
  dehydrationPct: number;

  @Column({ type: 'real' })
  inadvertentlyPeeledOz: number;

  @Column({ type: 'real' })
  inadvertentlyPeeledPct: number;

  @Column({ type: 'real' })
  tailFinsMissingOz: number;

  @Column({ type: 'real' })
  tailFinsMissingPct: number;

  @Column({ type: 'real' })
  brokenTailsOz: number;

  @Column({ type: 'real' })
  brokenTailsPct: number;

  @Column({ type: 'real' })
  brokenDamagedOz: number;

  @Column({ type: 'real' })
  brokenDamagedPct: number;

  @Column({ type: 'real' })
  piecesOz: number;

  @Column({ type: 'real' })
  piecesPct: number;

  @Column({ type: 'real' })
  unusableMaterialOz: number;

  @Column({ type: 'real' })
  unusableMaterialPct: number;

  @Column({ type: 'real' })
  redShrimpOz: number;

  @Column({ type: 'real' })
  redShrimpPct: number;

  @Column({ type: 'real' })
  blackSpotsShellOz: number;

  @Column({ type: 'real' })
  blackSpotsShellPct: number;

  @Column({ type: 'real' })
  blackSpotsMeatOz: number;

  @Column({ type: 'real' })
  blackSpotsMeatPct: number;

  @Column({ type: 'real' })
  textureOz: number;

  @Column({ type: 'real' })
  texturePct: number;

  @Column({ type: 'real' })
  uniformityLarge: number;

  @Column({ type: 'real' })
  uniformitySmall: number;

  @Column({ type: 'real' })
  ratio: number;

  @Column({ length: 1 })
  odor: 'S' | 'U';

  @Column({ length: 1 })
  flavor: 'S' | 'U';

  @Column({ length: 1 })
  extraneousMaterial: 'S' | 'U';

  @Column({ type: 'int' })
  sampleCount: number;

  @Column({ type: 'text' })
  uniformityText: string;

  @Column({ type: 'text', nullable: true })
  actionTaken?: string;

  @Column({ length: 100, nullable: true })
  supervisorSignature?: string;
}
