import { Injectable } from '@nestjs/common';
import { GetAllAlaCarteMenuUsecaseService } from 'src/usecases/menu/get-all-ala-carte-menu-usecase/get-all-ala-carte-menu-usecase.service';
import { GetAllDessertMenuUsecaseService } from 'src/usecases/menu/get-all-dessert-menu-usecase/get-all-dessert-menu-usecase.service';
import { GetAllDrinkMenuUsecaseService } from 'src/usecases/menu/get-all-drink-menu-usecase/get-all-drink-menu-usecase.service';
import { GetAllMenuUsecaseService } from 'src/usecases/menu/get-all-menu-usecase/get-all-menu-usecase.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly getAllMenuUsecase: GetAllMenuUsecaseService,
    private readonly getAllAlaCarteUsecase: GetAllAlaCarteMenuUsecaseService,
    private readonly getAllDrinkUsecase: GetAllDrinkMenuUsecaseService,
    private readonly getAllDessertUsecase: GetAllDessertMenuUsecaseService,
  ) {}

  getAllMenu() {
    return this.getAllMenuUsecase.execute();
  }

  getAllAlaCaarte() {
    return this.getAllAlaCarteUsecase.execute();
  }
  getAllDrink() {
    return this.getAllDrinkUsecase.execute();
  }
  getAllDessert() {
    return this.getAllDessertUsecase.execute();
  }
}
