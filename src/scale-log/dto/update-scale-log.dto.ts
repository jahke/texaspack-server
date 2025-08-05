import { PartialType } from '@nestjs/mapped-types';
import { CreateScaleLogDto } from './create-scale-log.dto';

export class UpdateScaleLogDto extends PartialType(CreateScaleLogDto) {}
