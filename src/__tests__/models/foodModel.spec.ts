import { FoodHelper } from '../../helpers/foodModel.helper'
import { FoodModel } from '../../models/foodModel'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'CocaCola',
      description: 'Coca-Cola Personal',
      price: 1000
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.name).toEqual('CocaCola')
    expect(foodModel.description).toEqual('Coca-Cola Personal')
    expect(foodModel.price).toBe(1000)
  })

  it('FoodHelper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toMatchInlineSnapshot('FoodHelper {}')
  })
})
