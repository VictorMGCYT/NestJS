import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    private readonly carsServie: CarsService;

    constructor(carsService: CarsService){
        this.carsServie = carsService
    }

    @Get()
    getAllCars(){
        return this.carsServie.findAll();
    }

    // Obtener carro por su ID
    @Get(':id')     //Aquí estamos decorando el parametro ID para que sepa que es el parametro de la URL
    getCarById(@Param('id') id: string){

        return this.carsServie.findOneById(Number(id));
    }

}
