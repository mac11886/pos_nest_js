import { Injectable } from '@nestjs/common';
import { BarGetAllUsecaseService } from 'src/usecases/bar/get-all/get-all.service';
import { TableGetAllService } from 'src/usecases/table/get-all/get-all.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TableService {
  constructor(
    private readonly getAllTableUsecase: TableGetAllService,
    private readonly getAllBarUsecase: BarGetAllUsecaseService,
  ) {}
  create(createTableDto: CreateTableDto) {
    return 'This action adds a new table';
  }

  findAll() {
    const data = this.getAllTableUsecase.execute();
    return data;
  }

  findAllBar() {
    const data = this.getAllBarUsecase.execute();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
