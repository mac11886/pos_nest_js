import { Test, TestingModule } from '@nestjs/testing';
import { GetAllDessertMenuUsecaseService } from './get-all-dessert-menu-usecase.service';

describe('GetAllDessertMenuUsecaseService', () => {
  let service: GetAllDessertMenuUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllDessertMenuUsecaseService],
    }).compile();

    service = module.get<GetAllDessertMenuUsecaseService>(GetAllDessertMenuUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
