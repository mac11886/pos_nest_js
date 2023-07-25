import { Module } from '@nestjs/common';
import { UsecasesModule } from 'src/usecases/usecases.module';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  imports: [UsecasesModule],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
