import { Test, TestingModule } from '@nestjs/testing';
import { HaccpController } from './haccp.controller';
import { HaccpService } from './haccp.service';

describe('HaccpController', () => {
  let controller: HaccpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HaccpController],
      providers: [HaccpService],
    }).compile();

    controller = module.get<HaccpController>(HaccpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
