import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../domain/service/app.service';
import { StationModule } from './station.module';
import { Connection } from 'typeorm';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    StationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      port: 3306,
      database: 'search',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ElasticsearchModule.register({
      node: process.env.SEARCH_HOST,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
