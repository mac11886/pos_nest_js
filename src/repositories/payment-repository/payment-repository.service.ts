import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/entities/payment.entity';
import { IResponse } from 'src/interface/type-response';
import { returnResponse } from 'src/utils/return-response';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentRepositoryService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly payment: Repository<PaymentEntity>,
  ) {}

  async findAllTablePayment(): Promise<IResponse> {
    try {
      const findAll = await this.payment.find({
        where: { type: 'table' },
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAll);
    } catch (error) {
      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }

  async findAllBarPayment(): Promise<IResponse> {
    try {
      const findAll = await this.payment.find({
        where: { type: 'bar' },
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAll);
    } catch (error) {
      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }
}
