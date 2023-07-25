import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRepositoryService } from './payment-repository.service';

describe('PaymentRepositoryService', () => {
  let service: PaymentRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentRepositoryService],
    }).compile();

    service = module.get<PaymentRepositoryService>(PaymentRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
