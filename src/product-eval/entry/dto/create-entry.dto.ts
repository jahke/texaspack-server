import {
  IsInt,
  IsNumber,
  IsString,
  IsOptional,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductEvalEntryDto {
  @IsInt()
  @Type(() => Number)
  reportId: number;

  @IsString()
  timeSampleCheck: string;

  @IsNumber()
  @Type(() => Number)
  netWeightOz: number;

  @IsInt()
  @Type(() => Number)
  totalCount5lb: number;

  @IsNumber()
  @Type(() => Number)
  actualCountPerLb: number;

  @IsNumber()
  @Type(() => Number)
  dehydrationOz: number;

  @IsNumber()
  @Type(() => Number)
  dehydrationPct: number;

  @IsNumber()
  @Type(() => Number)
  inadvertentlyPeeledOz: number;

  @IsNumber()
  @Type(() => Number)
  inadvertentlyPeeledPct: number;

  @IsNumber()
  @Type(() => Number)
  tailFinsMissingOz: number;

  @IsNumber()
  @Type(() => Number)
  tailFinsMissingPct: number;

  @IsNumber()
  @Type(() => Number)
  brokenTailsOz: number;

  @IsNumber()
  @Type(() => Number)
  brokenTailsPct: number;

  @IsNumber()
  @Type(() => Number)
  brokenDamagedOz: number;

  @IsNumber()
  @Type(() => Number)
  brokenDamagedPct: number;

  @IsNumber()
  @Type(() => Number)
  piecesOz: number;

  @IsNumber()
  @Type(() => Number)
  piecesPct: number;

  @IsNumber()
  @Type(() => Number)
  unusableMaterialOz: number;

  @IsNumber()
  @Type(() => Number)
  unusableMaterialPct: number;

  @IsNumber()
  @Type(() => Number)
  redShrimpOz: number;

  @IsNumber()
  @Type(() => Number)
  redShrimpPct: number;

  @IsNumber()
  @Type(() => Number)
  blackSpotsShellOz: number;

  @IsNumber()
  @Type(() => Number)
  blackSpotsShellPct: number;

  @IsNumber()
  @Type(() => Number)
  blackSpotsMeatOz: number;

  @IsNumber()
  @Type(() => Number)
  blackSpotsMeatPct: number;

  @IsNumber()
  @Type(() => Number)
  textureOz: number;

  @IsNumber()
  @Type(() => Number)
  texturePct: number;

  @IsNumber()
  @Type(() => Number)
  uniformityLarge: number;

  @IsNumber()
  @Type(() => Number)
  uniformitySmall: number;

  @IsNumber()
  @Type(() => Number)
  ratio: number;

  @IsIn(['S', 'U'])
  odor: 'S' | 'U';

  @IsIn(['S', 'U'])
  flavor: 'S' | 'U';

  @IsIn(['S', 'U'])
  extraneousMaterial: 'S' | 'U';

  @IsInt()
  @Type(() => Number)
  sampleCount: number;

  @IsString()
  uniformityText: string;

  @IsString()
  @IsOptional()
  actionTaken?: string;

  @IsString()
  @IsOptional()
  supervisorSignature?: string;
}
