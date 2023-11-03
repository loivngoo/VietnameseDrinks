import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
import { PostgresqlModule } from './databases/postgresql/postgresql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { repositories } from './repositories';
import { controllers, services } from './components';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    PostgresqlModule,
    TypeOrmModule.forFeature([...Object.values(entities)]),
  ],
  controllers: [AppController, ...controllers],
  providers: [AppService, ...services, ...repositories],
})
export class AppModule {}
