import { ContractModel, ContractPrime } from '../../models/contract.model'

describe('Class ContractoModel', () => {
  it('Contract 12 month', () => {
    const contract = new ContractModel({
      id: '#001',
      date_init: new Date(2020),
      expiration_date: new Date(2021),
      month: 12,
      monthly_cost: 500
    })
    expect(contract.getId).toBe('#001')
    expect(contract.getDateInit).toStrictEqual(new Date(2020))
    expect(contract.getExpirationDate).toStrictEqual(new Date(2021))
    expect(contract.getMonth).toBe(12)
    expect(contract.getMonthlyCost).toBe(500)
  })

  it('Monthly discount contract prime 24 months', () => {
    const contractPrime = new ContractPrime({
      id: '#001',
      date_init: new Date(2020),
      expiration_date: new Date(2022),
      month: 12,
      monthly_cost: 500
    })
    expect(contractPrime.getId).toBe('#001')
    expect(contractPrime.getDateInit).toStrictEqual(new Date(2020))
    expect(contractPrime.getExpirationDate).toStrictEqual(new Date(2022))
    expect(contractPrime.getMonth).toBe(12)
    expect(contractPrime.getMonthlyCost).toBe(500)
    expect(contractPrime.getMonthlyDiscount).toBe(50)
  })
})
