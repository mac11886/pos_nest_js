import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';

@ApiTags('payment')
@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('table')
  getAllTablePayment() {
    return this.paymentService.getAllTablePayment();
  }

  @Get('bar')
  getAllBarPayment() {
    return this.paymentService.getAllBarPayment();
  }
}
