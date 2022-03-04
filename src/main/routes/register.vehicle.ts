import { Router } from 'express'
import { AdapterRouter } from '../adapters/express'
import { makeRegisterVehicleController } from '../factories/vehicle'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/vehicle', AdapterRouter(makeRegisterVehicleController()))
}
