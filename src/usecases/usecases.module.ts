import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { BarGetAllPaymentUsecaseService } from './bar/get-all-payment/get-all-payment.service';
import { BarGetAllUsecaseService } from './bar/get-all/get-all.service';
import { TableGetAllPaymentUsecaseService } from './table/get-all-payment/get-all-payment.service';
import { TableGetAllService } from './table/get-all/get-all.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    TableGetAllService,
    BarGetAllUsecaseService,
    BarGetAllPaymentUsecaseService,
    TableGetAllPaymentUsecaseService,
  ],
  exports: [
    TableGetAllService,
    BarGetAllUsecaseService,
    BarGetAllPaymentUsecaseService,
    TableGetAllPaymentUsecaseService,
  ],
})
export class UsecasesModule {}
