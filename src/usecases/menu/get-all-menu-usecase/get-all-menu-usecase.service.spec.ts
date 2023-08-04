import { Test, TestingModule } from '@nestjs/testing';
import { GetAllMenuUsecaseService } from './get-all-menu-usecase.service';

describe('GetAllMenuUsecaseService', () => {
  let service: GetAllMenuUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllMenuUsecaseService],
    }).compile();

    service = module.get<GetAllMenuUsecaseService>(GetAllMenuUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
