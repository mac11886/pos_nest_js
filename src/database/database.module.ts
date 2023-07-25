import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/entities/payment.entity';
import { TableEntity } from 'src/entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 25432,
      username: 'postgres',
      password: 'postgresPassword',
      database: 'pos_shop',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TableEntity, PaymentEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
