import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { TableModule } from './table/table.module';
import { UsecasesModule } from './usecases/usecases.module';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `src/env/${process.env.ENV || 'dev'}.env `,
    }),

    TableModule,
    RepositoriesModule,
    UsecasesModule,
    PaymentModule,
    MenuModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
