import { FoodHelper } from '../helpers/foodModel.helper'

export class FoodModel {
  constructor (private readonly foodHelper: FoodHelper) {}

  public get name (): string {
    return this.foodHelper.name
  }

  public get description (): string {
    return this.foodHelper.description
  }

  public get price (): number {
    return this.foodHelper.price
  }
}
