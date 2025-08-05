import { Module }               from '@nestjs/common';
import { TypeOrmModule }        from '@nestjs/typeorm';

import { HaccpReport }          from './entities/haccp.entity';
import { HaccpController }      from './haccp.controller';
import { HaccpService }         from './haccp.service';

import { InspectionModule }     from './inspection/inspection.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ HaccpReport ]),
    InspectionModule,
  ],
  controllers: [ HaccpController ],
  providers:    [ HaccpService ],
  exports: [HaccpService]
})
export class HaccpModule {}
