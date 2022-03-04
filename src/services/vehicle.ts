import { VehicleModel } from '../domain/models/vehicle.model'
import vehicleRepository from '../domain/repositories/vehicleRepository'

export class VehicleService {
  async create (vehicle: VehicleModel): Promise<VehicleModel> {
    return await vehicleRepository.create(vehicle)
  }
}

export default new VehicleService()
