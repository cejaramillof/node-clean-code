import { Vehicle } from '../entities/IVehicle'
import { IVehicleRepository } from '../repositories/IVehicle'
import { CreateVehicleDTO } from './CreateVehicleDTO'

export class CreateVehicle {
  constructor (private readonly vehicleRepository: IVehicleRepository) {}

  async execute (data: CreateVehicleDTO): Promise<void> {
    const vehicleExists = await this.vehicleRepository.findById(data.id)
    if (vehicleExists) throw new Error('Vehicle exists in db')
    const vehicle = new Vehicle(data)
    await this.vehicleRepository.save(vehicle)
  }
}
