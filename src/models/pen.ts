export class Pen {
  constructor (private readonly message: string) {}

  write (): string {
    return this.message
  }
}

export class OldPen {
  name: string
  message: string

  constructor () {
    this.name = 'name'
    this.message = 'Hola Mundo'
  }
}
