import { Test, TestingModule } from '@nestjs/testing';
import { TableRepositoryService } from './table-repository.service';

describe('TableRepositoryService', () => {
  let service: TableRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableRepositoryService],
    }).compile();

    service = module.get<TableRepositoryService>(TableRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
