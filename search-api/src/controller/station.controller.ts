import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateStationDto } from '../application/dto/create-station.dto';
import { StationInterface } from '../application/interface/station.interface';
import { StationService } from '../domain/service/station.service';
import { Station } from '../domain/entity/station.entity'

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  async create(@Body() createStationDto: CreateStationDto): Promise<StationInterface>  {
    const station = new Station(
      createStationDto.name,
      createStationDto.latitude,
      createStationDto.longitude,
      createStationDto.businessHour
    );
    return this.stationService.create(station);
  }

  @Get()
  async findAll(): Promise<StationInterface[]> {
    return this.stationService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<StationInterface> {
    return this.stationService.findOne(params.id);
  }
}
