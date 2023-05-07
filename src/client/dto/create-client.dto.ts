import { IsDateString, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  fcs: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsDateString()
  @IsNotEmpty()
  date_of_birth: Date;

  @IsInt()
  @IsNotEmpty()
  passport_series: number;

  @IsInt()
  @IsNotEmpty()
  passport_number: number;
}
