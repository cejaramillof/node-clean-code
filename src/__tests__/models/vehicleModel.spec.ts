import { VehicleHelper } from '../../helpers/vehicleModel.helper'
import { VehicleModel } from '../../models/vehicleModel'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Ferrari',
      model: 'F400',
      year: 2022,
      price: 20000
    })

    expect(vehicleModel.name).toEqual('Ferrari')
    expect(vehicleModel.model).toEqual('F400')
    expect(vehicleModel.year).toBe(2022)
    expect(vehicleModel.price).toBe(20000)
  })

  it('VehicleHelper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(Object.getOwnPropertyNames(vehicleHelper)).toMatchInlineSnapshot('Array []')
    expect(vehicleHelper).toMatchInlineSnapshot('VehicleHelper {}')
  })
})
