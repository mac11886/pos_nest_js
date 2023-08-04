import { Injectable } from '@nestjs/common';
import { MenuRepositoryService } from 'src/repositories/menu-repository/menu-repository.service';

@Injectable()
export class GetAllDessertMenuUsecaseService {
  constructor(private readonly menuRepository: MenuRepositoryService) {}

  async execute() {
    return await this.menuRepository.findDessert();
  }
}
