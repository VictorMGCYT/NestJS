
// ** Las propiedades de los DTO deben de ser readonly
// ** Ya que no deberían de poder ser modificadas

import { IsString } from "class-validator";

class CreateCarDto {

    @IsString({message: "La propiedad brand debe ser un string"})
    public readonly brand: string;

    @IsString()
    public readonly model: string;

}

export {
    CreateCarDto
}