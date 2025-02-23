import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandsService {

	private brans: Brand[] =[
		// {
		// id: uuid(),
		// name: 'Toyota',
		// createdAt: new Date().getTime()
		// }
	];

	create(createBrandDto: CreateBrandDto) {

		// Desestructuramos los datos para así asignar los que necesitamos
		const {name } = createBrandDto;

		const brand: Brand = {
			id: uuid(),
			name: name.toLowerCase(),
			createdAt: new Date().getTime()
		}

		this.brans.push(brand);
		return brand;

	}

	findAll() {
		return this.brans;
	}

	findOne(id: string) {
		const brand: Brand | undefined = this.brans.find( brand => brand.id === id)

		if (!brand) {
			throw new NotFoundException(`Car with id: ${id} was not found`);
		}
		return brand;
	}

	update(id: string, updateBrandDto: UpdateBrandDto) {

		let brandDB: Brand = this.findOne(id);

		this.brans = this.brans.map( brand => {
			if (brand.id === id) {
			brandDB.updatedAt = new Date().getTime();
			brandDB = {
				...brandDB,
				...updateBrandDto
			}
			return brandDB;
			}
			return brand;
		})
		return brandDB;
	}

	remove(id: string) {
		return this.brans = this.brans.filter(brand => brand.id !== id)
	}

	fillBrandsWithSeedData( brands: Brand[] ){
        this.brans = brands;
    }
}
