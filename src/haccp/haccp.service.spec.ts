import { Test, TestingModule } from '@nestjs/testing';
import { HaccpService } from './haccp.service';

describe('HaccpService', () => {
  let service: HaccpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HaccpService],
    }).compile();

    service = module.get<HaccpService>(HaccpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
