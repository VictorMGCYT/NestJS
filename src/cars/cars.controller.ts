import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
    getCarById(@Param('id', ParseIntPipe) id: number){
        return this.carsServie.findOneById(Number(id));
    }

    @Post()
    createCar( @Body() body: any ){
        return body;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ){
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ){
        return {
            methos: "Delete",
            msg: `Deleted car with id: ${id}`
        };
    }
}
