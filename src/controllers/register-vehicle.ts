import { MissingFormalParameter } from '../errors/client-error'
import { HttpRequest, HttpResponse } from '../interfaces/http.interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year']

    for (const prop of requiredProperties) {
      if (!httpRequest.body[prop]) {
        return {
          statusCode: 400,
          body: new MissingFormalParameter(prop)
        }
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
