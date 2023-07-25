import { Injectable } from '@nestjs/common';
import { TableRepositoryService } from 'src/repositories/table-repository/table-repository.service';

@Injectable()
export class BarGetAllUsecaseService {
  constructor(private readonly tableRepository: TableRepositoryService) {}

  async execute() {
    return await this.tableRepository.findAllBar();
  }
}
