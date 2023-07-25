import { Injectable } from '@nestjs/common';
import { BarGetAllPaymentUsecaseService } from 'src/usecases/bar/get-all-payment/get-all-payment.service';
import { TableGetAllPaymentUsecaseService } from 'src/usecases/table/get-all-payment/get-all-payment.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly getAllTablePaymentUsecase: TableGetAllPaymentUsecaseService,
    private readonly getAllBarPaymentUsecase: BarGetAllPaymentUsecaseService,
  ) {}

  getAllTablePayment() {
    return this.getAllTablePaymentUsecase.execute();
  }

  getAllBarPayment() {
    return this.getAllBarPaymentUsecase.execute();
  }
}
