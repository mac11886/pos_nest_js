import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const postgresConnect: any = {
      type: 'postgres',
      host: 'localhost',
      port: 25432,
      username: 'postgres',
      password: 'postgresPassword',
      database: 'pos_shop',
      timezone: 'Asia/Bangkok',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      // dropSchema: true,
      // logging: true,
      // logger: "file"
    };
    console.log('postgresConnect========:: ', postgresConnect);
    return postgresConnect;
  }
}
