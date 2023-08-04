import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';

@ApiTags('menu')
@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('all')
  getAllMenu() {
    return this.menuService.getAllMenu();
  }

  @Get('a-la-carte-menu')
  getALaCarteMenu() {
    return this.menuService.getAllAlaCaarte();
  }

  @Get('drink-menu')
  getDrinkMenu() {
    return this.menuService.getAllDrink();
  }

  @Get('dessert-menu')
  getDessertMenu() {
    return this.menuService.getAllDessert();
  }
}
