import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Station {
  constructor(
    name,
    latitude,
    longitude,
    businessHour
  ) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.businessHour = businessHour
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  businessHour: Date;
}
