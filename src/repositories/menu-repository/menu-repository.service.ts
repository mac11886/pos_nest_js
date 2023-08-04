import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { IResponse } from 'src/interface/type-response';
import { returnResponse } from 'src/utils/return-response';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRepositoryService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menu: Repository<MenuEntity>,
  ) {}

  async findAll(): Promise<IResponse> {
    try {
      const findAll = await this.menu.find({
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAll);
    } catch (error) {
      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }
  async findALarCarte(): Promise<IResponse> {
    try {
      const findAlALarCarte = await this.menu.find({
        where: { category: 'A La Carte' },
        order: {
          id: 'ASC', // "DESC"
        },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findAlALarCarte);
    } catch (error) {
      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }
  async findDrink(): Promise<IResponse> {
    try {
      const findDrink = await this.menu.find({
        where: { category: 'Drink' },
      });
      console.log(findDrink);
      return returnResponse(true, HttpStatus.OK, 'success', findDrink);
    } catch (error) {
      console.log(error);

      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }
  async findDessert(): Promise<IResponse> {
    try {
      const findDessert = await this.menu.find({
        where: { category: 'Dessert' },
      });
      return returnResponse(true, HttpStatus.OK, 'success', findDessert);
    } catch (error) {
      return returnResponse(true, HttpStatus.BAD_GATEWAY, 'success', error);
    }
  }
}
