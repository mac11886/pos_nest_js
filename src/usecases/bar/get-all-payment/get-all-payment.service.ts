import { Injectable } from '@nestjs/common';
import { PaymentRepositoryService } from 'src/repositories/payment-repository/payment-repository.service';

@Injectable()
export class BarGetAllPaymentUsecaseService {
  constructor(private readonly paymentRepository: PaymentRepositoryService) {}

  async execute() {
    return await this.paymentRepository.findAllBarPayment();
  }
}
