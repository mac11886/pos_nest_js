import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableEntity } from 'src/entities/table.entity';
import { IResponse } from 'src/interface/type-response';
import { returnResponse } from 'src/utils/return-response';
import { Repository } from 'typeorm';

@Injectable()
export class TableRepositoryService {
  constructor(
    @InjectRepository(TableEntity)
    private readonly table: Repository<TableEntity>,
  ) {}

  async findAll(): Promise<IResponse> {
    try {
      const findAll = await this.table.find({
        where: { type: 'table' },
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAll);
    } catch (error) {
      return returnResponse(true, HttpStatus.OK, 'success', error);
    }
  }

  async findAllBar(): Promise<IResponse> {
    try {
      const findAll = await this.table.find({
        where: { type: 'bar' },
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAll);
    } catch (error) {
      return returnResponse(true, HttpStatus.OK, 'success', error);
    }
  }
}
