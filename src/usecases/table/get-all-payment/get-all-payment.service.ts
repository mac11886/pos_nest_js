import { Injectable } from '@nestjs/common';
import { PaymentRepositoryService } from 'src/repositories/payment-repository/payment-repository.service';

@Injectable()
export class TableGetAllPaymentUsecaseService {
  constructor(private readonly paymentRepository: PaymentRepositoryService) {}

  async execute() {
    return await this.paymentRepository.findAllTablePayment();
  }
}
