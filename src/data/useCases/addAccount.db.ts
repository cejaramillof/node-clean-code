import { AddAccount, addAccountVehicle } from '../../domain/useCases/addAccount'
import VehicleService from '../../services/vehicle'
import { MailNodemailerProvider } from '../../utils/adapters/nodemailer'

export class DbAddAccount implements AddAccount {
  constructor (private readonly mailNodemailerProvider: MailNodemailerProvider) {
    this.mailNodemailerProvider = mailNodemailerProvider
  }

  async add (vehicle: addAccountVehicle): Promise<addAccountVehicle> {
    const vehicleDB = await VehicleService.create(vehicle)
    await this.mailNodemailerProvider.sendEmail({
      to: {
        name: vehicleDB.name,
        email: vehicleDB.email
      },
      from: {
        name: 'Carlos',
        email: 'cejaramillof@gmail.com'
      },
      subject: 'You have registrated a new Vehicle: Welcome!!',
      body: '<b>Hola</b>'
    })
    return await new Promise(resolve => resolve(vehicleDB))
  }
}
