import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MenuRepositoryService } from './menu-repository/menu-repository.service';
import { PaymentRepositoryService } from './payment-repository/payment-repository.service';
import { TableRepositoryService } from './table-repository/table-repository.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    TableRepositoryService,
    PaymentRepositoryService,
    MenuRepositoryService,
  ],
  exports: [
    TableRepositoryService,
    PaymentRepositoryService,
    MenuRepositoryService,
  ],
})
export class RepositoriesModule {}
