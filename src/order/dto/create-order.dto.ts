import { Optional } from "@nestjs/common";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Max } from "sequelize-typescript";

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    id_tour: number;

    @IsInt()
    @IsNotEmpty()
    id_client: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    transport: string;

    @IsString()
    @Optional()
    type_of_food?: string;

    @IsString()
    @Optional()
    type_of_accommodation?: string;

    @IsInt()
    @IsNotEmpty()
    @Max(65)
    cost: number;
}