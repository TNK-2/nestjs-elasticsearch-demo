import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Station } from '../entity/station.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
  ) {}

  create(station: Station): Promise<Station> {
    return this.stationRepository.save(station);
  }

  findAll(): Promise<Station[]> {
    return this.stationRepository.find();
  }

  findOne(id: number): Promise<Station> {
    return this.stationRepository.findOne(id);
  }
}