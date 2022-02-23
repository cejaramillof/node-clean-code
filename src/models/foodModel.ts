export class FoodModel {
  constructor (
    private readonly _name: string,
    private readonly _description: string,
    private readonly _price: number
  ) {}

  public get name (): string {
    return this._name
  }

  public get description (): string {
    return this._description
  }

  public get price (): number {
    return this._price
  }
}
