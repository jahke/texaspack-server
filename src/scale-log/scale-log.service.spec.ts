import { Test, TestingModule } from '@nestjs/testing';
import { ScaleLogService } from './scale-log.service';

describe('ScaleLogService', () => {
  let service: ScaleLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScaleLogService],
    }).compile();

    service = module.get<ScaleLogService>(ScaleLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
