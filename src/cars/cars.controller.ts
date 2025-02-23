import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

    private readonly carsService: CarsService;

    constructor(carsService: CarsService){
        this.carsService = carsService
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    // Obtener carro por su ID
    @Get(':id')     //Aquí estamos decorando el parametro ID para que sepa que es el parametro de la URL
    getCarById(@Param('id' , ParseUUIDPipe) id: string){
        return this.carsService.findOneById(id);
    }

    // ! Esto está chido para los comentarios
    @Post()
    // @UsePipes( ValidationPipe )
    createCar( @Body() createCarDto: CreateCarDto ){

        
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe ) id: string, 
        @Body() updateCarDto: UpdateCarDto ) 
    {
        return this.carsService.update( id, updateCarDto );
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ){
        
        return this.carsService.delete(id)

    }
}
