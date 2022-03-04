import { Controller } from '../interfaces/controller'
import { MissingFormalParameter } from '../errors/client-error'
import { HttpRequest, HttpResponse } from '../interfaces/http.interface'
import { badRequest, serverError, serverSuccess } from '../helpers/http.helper'
import { AddAccount } from '../domain/useCases/addAccount'

export class RegisterVehicle implements Controller {
  constructor (private readonly addAccount: AddAccount) {
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredProperties = ['name', 'model', 'year', 'email']
    try {
      for (const prop of requiredProperties) {
        if (!httpRequest.body[prop]) return badRequest(new MissingFormalParameter(prop))
      }

      const { name, model, year, color, email } = httpRequest.body
      const vehicle = await this.addAccount.add({
        name, model, year, color, email
      })

      return serverSuccess(vehicle)
    } catch (error) {
      return serverError(error)
    }
  }
}
