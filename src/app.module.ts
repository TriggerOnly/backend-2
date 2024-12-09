import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './User/User.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4000,
      username: 'Trigger',
      password: 'TheTrigger1911',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    User,
  ],
})
export class AppModule {}