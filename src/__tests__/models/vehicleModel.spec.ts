import { VehicleModel } from '../../models/vehicleModel'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel('Ferrari', 'F400', 2022)

    expect(vehicleModel.name).toEqual('Ferrari')
    expect(vehicleModel.model).toEqual('F400')
    expect(vehicleModel.year).toBe(2022)
  })
})
