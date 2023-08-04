import { Test, TestingModule } from '@nestjs/testing';
import { GetAllDrinkMenuUsecaseService } from './get-all-drink-menu-usecase.service';

describe('GetAllDrinkMenuUsecaseService', () => {
  let service: GetAllDrinkMenuUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllDrinkMenuUsecaseService],
    }).compile();

    service = module.get<GetAllDrinkMenuUsecaseService>(GetAllDrinkMenuUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
