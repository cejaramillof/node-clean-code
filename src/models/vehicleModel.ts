import { VehicleHelper } from '../helpers/vehicleModel.helper'

export class VehicleModel {
  constructor (
    private readonly vehicle: VehicleHelper
    /*
    // alt: 2
    private readonly _name: string,xw
    private readonly _model: string,
    private readonly _year: number
    */
  ) {
    /*
    // alt: 1
    this._name = name
    this._model = model
    this._year = year
    */
  }
  /*
  // alt: 1
  private readonly _name: string
  private readonly _model: string
  private readonly _year: number
  */

  public get name (): string {
    return this.vehicle.name
  }

  public get model (): string {
    return this.vehicle.model
  }

  public get year (): number {
    return this.vehicle.year
  }

  public get price (): number {
    return this.vehicle.price
  }
}
