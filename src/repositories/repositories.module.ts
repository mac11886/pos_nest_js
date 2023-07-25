import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PaymentRepositoryService } from './payment-repository/payment-repository.service';
import { TableRepositoryService } from './table-repository/table-repository.service';

@Module({
  imports: [DatabaseModule],
  providers: [TableRepositoryService, PaymentRepositoryService],
  exports: [TableRepositoryService, PaymentRepositoryService],
})
export class RepositoriesModule {}
