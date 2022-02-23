import { RegisterVehicle } from '../controllers/register-vehicle'

describe('RegisterVehicle', () => {
  test('is the name doesn\'t exist return 400', () => {
    // system under test
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'Ferrari',
        model: 'F400',
        year: 2022
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(Error)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
    expect(httpResponse.body.message).toBe('error in the: name')
  })

  test('is the model doesn\'t exist return 400', () => {
    // system under test
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Ferrari',
        // model: 'F400',
        year: 2022
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(Error)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
    expect(httpResponse.body.message).toBe('error in the: model')
  })
})
