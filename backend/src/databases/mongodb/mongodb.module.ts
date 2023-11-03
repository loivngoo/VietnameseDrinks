import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: process.env.MONGODB_CONNECTION_STRING,
    //   database: process.env.MONGODB_DATABASE,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   ssl: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // }),
  ],
})
export class MongodbModule {}
