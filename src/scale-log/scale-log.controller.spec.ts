import { Test, TestingModule } from '@nestjs/testing';
import { ScaleLogController } from './scale-log.controller';
import { ScaleLogService } from './scale-log.service';

describe('ScaleLogController', () => {
  let controller: ScaleLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScaleLogController],
      providers: [ScaleLogService],
    }).compile();

    controller = module.get<ScaleLogController>(ScaleLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
