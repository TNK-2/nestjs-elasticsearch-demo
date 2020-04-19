import { IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateStationDto {

  @IsNotEmpty()
  @MaxLength(50)
  readonly name: string;

  @IsNotEmpty()
  @IsNumber
  readonly latitude: number;

  @IsNotEmpty()
  @IsNumber
  readonly longitude: number;

  @IsNotEmpty()
  readonly businessHour: Date;
}
