import { Entity, Column, PrimaryGeneratedColumn, Index, Double } from 'typeorm';

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
  latitude: Double;

  @Column()
  longitude: Double;

  @Column()
  businessHour: Date;
}
