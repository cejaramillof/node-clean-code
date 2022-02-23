export class VehicleModel {
  constructor (
    private readonly _name: string,
    private readonly _model: string,
    private readonly _year: number
  ) {
    /*
    this._name = name
    this._model = model
    this._year = year
    */
  }
  /*
  private readonly _name: string
  private readonly _model: string
  private readonly _year: number
  */

  public get name (): string {
    return this._name
  }

  public get model (): string {
    return this._model
  }

  public get year (): number {
    return this._year
  }
}
