import { AddAccount, addAccountVehicle } from '../../domain/useCases/addAccount'
import VehicleService from '../../services/vehicle'

export class DbAddAccount implements AddAccount {
  async add (vehicle: addAccountVehicle): Promise<addAccountVehicle> {
    const vehicleDB = await VehicleService.create(vehicle)
    return await new Promise(resolve => resolve(vehicleDB))
  }
}
