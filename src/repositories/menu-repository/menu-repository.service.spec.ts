import { Test, TestingModule } from '@nestjs/testing';
import { MenuRepositoryService } from './menu-repository.service';

describe('MenuRepositoryService', () => {
  let service: MenuRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRepositoryService],
    }).compile();

    service = module.get<MenuRepositoryService>(MenuRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
