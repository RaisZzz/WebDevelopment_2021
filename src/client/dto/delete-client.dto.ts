import { IsInt } from "class-validator";
import { Type } from "class-transformer";

export class DeleteClientDto {
    @IsInt()
    @Type(() => Number)
    id_client: number;
}