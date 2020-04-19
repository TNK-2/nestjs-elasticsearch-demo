import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationController } from '../controller/station.controller';
import { StationService } from '../domain/service/station.service';
import { Station } from '../domain/entity/station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Station])],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
