import { Module } from '@nestjs/common';
import { UsecasesModule } from 'src/usecases/usecases.module';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [UsecasesModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
