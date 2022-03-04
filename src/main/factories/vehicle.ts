import { RegisterVehicle } from '../../controllers/register-vehicle'
import { DbAddAccount } from '../../data/useCases/addAccount.db'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccount = new DbAddAccount()
  const registerVehicle = new RegisterVehicle(dbAddAccount)
  return registerVehicle
}
