import validator from 'validator'
import { EmailValidatorAdapter } from '../../../EmailValidator/adapter/email.validator'

jest.mock('validator', () => ({
  default: {
    isEmail (): boolean {
      return true
    }
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('Email Validator', () => {
  it('Should return false validator', () => {
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const sut = makeSut()

    const isValid = sut.isValid('email')

    expect(isValid).toBe(false)
    expect(isValid).toBeFalsy()
  })

  it('Should return true validator', () => {
    const sut = makeSut()

    const isValid = sut.isValid('email@email.com')

    expect(isValid).toBe(true)
    expect(isValid).toBeTruthy()
  })

  it('Should return right format email of the validator', () => {
    const isValidSpyOn = jest.spyOn(validator, 'isEmail')
    const sut = makeSut()

    sut.isValid('email@email.com')

    expect(isValidSpyOn).toHaveBeenCalledWith('email@email.com')
  })
})
