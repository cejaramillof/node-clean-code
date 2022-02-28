import { IContract } from '../interfaces/IContract'

export class ContractModel {
  constructor (public contract: IContract) {
    Object.assign(this, contract)
  }

  public get getId (): string {
    return this.contract.id
  }

  public get getDateInit (): Date {
    return this.contract.date_init
  }

  public get getExpirationDate (): Date {
    return this.contract.expiration_date
  }

  public get getMonth (): number {
    return this.contract.month
  }

  public get getMonthlyCost (): number {
    return this.contract.monthly_cost
  }
}

export class ContractPrime extends ContractModel {
  public get getMonthlyDiscount (): number {
    return this.contract.monthly_cost * 0.10
  }
}
