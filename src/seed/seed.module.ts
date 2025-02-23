import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // Importamos ya sean los servicios o controlladores
  // que fueron exportados desde los módulos especificados
  imports: [CarsModule, BrandsModule]
})
export class SeedModule {}
