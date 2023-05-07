import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { Client } from './client/client.model';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: String(process.env.POSTGRES_USER),
      password: String(process.env.POSTGRES_PASSWORD),
      database: String(process.env.POSTGRES_DB),
      logging: true,
      models: [
        Client,
      ],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature(),
    ScheduleModule.forRoot(),
    ClientModule,
  ],
})
export class AppModule {}
