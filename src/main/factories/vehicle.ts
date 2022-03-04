import { RegisterVehicle } from '../../controllers/register-vehicle'
import { DbAddAccount } from '../../data/useCases/addAccount.db'
import { MailNodemailerProvider } from '../../utils/adapters/nodemailer'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailNodemailerProvider = new MailNodemailerProvider()
  const dbAddAccount = new DbAddAccount(mailNodemailerProvider)
  const registerVehicle = new RegisterVehicle(dbAddAccount)
  return registerVehicle
}
