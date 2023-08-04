import { Test, TestingModule } from '@nestjs/testing';
import { GetAllAlaCarteMenuUsecaseService } from './get-all-ala-carte-menu-usecase.service';

describe('GetAllAlaCarteMenuUsecaseService', () => {
  let service: GetAllAlaCarteMenuUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllAlaCarteMenuUsecaseService],
    }).compile();

    service = module.get<GetAllAlaCarteMenuUsecaseService>(GetAllAlaCarteMenuUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
