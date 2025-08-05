import { PartialType } from '@nestjs/mapped-types';
import { CreateHaccpDto } from './create-haccp.dto';

export class UpdateHaccpDto extends PartialType(CreateHaccpDto) {}
