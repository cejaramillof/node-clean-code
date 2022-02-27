import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

describe.each([
  ['name', { model: 'F400', year: 2022 }],
  ['model', { name: 'Ferrari', year: 2022 }],
  ['year', { name: 'Ferrari', model: 'F400' }]
  // ['xd', { name: 'Ferrari', model: 'F400', year: 2022 }]
])('RegisterVehicle', (prop: string, body) => {
  test('is the %s doesn\'t exist return 400', () => {
    // system under test
    const sut = new RegisterVehicle()
    const httpRequest = { body }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(MissingFormalParameter)
    expect(httpResponse.body).toEqual(new MissingFormalParameter(prop))
    expect(httpResponse.body.message).toBe(`Error in the Param: ${prop}`)
  })
})
