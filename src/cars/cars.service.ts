import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ]

    public findAll(){
        return this.cars;
    }

    public findOneById(id: string){

        const car = this.cars.find( car => car.id === id);

        if (!car) {
            throw new NotFoundException(`Car with id: ${id} was not found`);
        }

        return car;
    }

    public create(createCarDto: CreateCarDto){
        
        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar)

        return {
            msg: "Car added correctly",
            newCar
        };

    }

    public update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById( id );

        // ESTE CONSOLE LOG ES IMPORTANTE PARA LA EXPLICACIÓN
        console.log(updateCarDto);

        this.cars = this.cars.map( car => {

            if ( car.id === id ) {
                carDB = { 
                    ...carDB,
                    ...updateCarDto, 
                    id 
                }
                return carDB;
            }

            return car;
        })
        
        return carDB;
    }

    public delete(id: string){

        if (!(this.findOneById(id))) {
            return {msg: "el carro no existe"}
        }

        const newCars = this.cars.filter( car => car.id !== id)

        return this.cars = newCars;
    }

}
