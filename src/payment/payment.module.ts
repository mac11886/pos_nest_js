import { Module } from '@nestjs/common';
import { UsecasesModule } from 'src/usecases/usecases.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
  imports: [UsecasesModule],
})
export class PaymentModule {}
