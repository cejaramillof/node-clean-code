import { VehicleModel } from '../models/vehicle.model'

export interface addAccountVehicle {
  name: string
  model: string
  year: string
  color: string
  email: string
}

export interface AddAccount {
  add: (vehicle: addAccountVehicle) => Promise<VehicleModel>
}
