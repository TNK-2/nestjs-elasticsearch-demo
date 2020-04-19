import { Double } from 'typeorm';

export interface StationInterface {
  id: number;

  name: string;

  latitude: Double;

  longitude: Double;

  businessHour: Date;
}
