import { FoodModel } from '../../models/foodModel'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel('CocaCola', 'Coca-Cola Personal', 1000)

    expect(foodModel.name).toEqual('CocaCola')
    expect(foodModel.description).toEqual('Coca-Cola Personal')
    expect(foodModel.price).toBe(1000)
  })
})
