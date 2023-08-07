import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { MenuService } from './menu.service';

@ApiTags('menu')
@ApiSecurity('bearer')
@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(AuthGuard)
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
