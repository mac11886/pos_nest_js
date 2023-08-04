import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { BarGetAllPaymentUsecaseService } from './bar/get-all-payment/get-all-payment.service';
import { BarGetAllUsecaseService } from './bar/get-all/get-all.service';
import { GetAllAlaCarteMenuUsecaseService } from './menu/get-all-ala-carte-menu-usecase/get-all-ala-carte-menu-usecase.service';
import { GetAllDessertMenuUsecaseService } from './menu/get-all-dessert-menu-usecase/get-all-dessert-menu-usecase.service';
import { GetAllDrinkMenuUsecaseService } from './menu/get-all-drink-menu-usecase/get-all-drink-menu-usecase.service';
import { GetAllMenuUsecaseService } from './menu/get-all-menu-usecase/get-all-menu-usecase.service';
import { TableGetAllPaymentUsecaseService } from './table/get-all-payment/get-all-payment.service';
import { TableGetAllService } from './table/get-all/get-all.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    TableGetAllService,
    BarGetAllUsecaseService,
    BarGetAllPaymentUsecaseService,
    TableGetAllPaymentUsecaseService,
    GetAllMenuUsecaseService,
    GetAllAlaCarteMenuUsecaseService,
    GetAllDrinkMenuUsecaseService,
    GetAllDessertMenuUsecaseService,
  ],
  exports: [
    TableGetAllService,
    BarGetAllUsecaseService,
    BarGetAllPaymentUsecaseService,
    TableGetAllPaymentUsecaseService,
    GetAllMenuUsecaseService,
    GetAllAlaCarteMenuUsecaseService,
    GetAllDrinkMenuUsecaseService,
    GetAllDessertMenuUsecaseService,
  ],
})
export class UsecasesModule {}
