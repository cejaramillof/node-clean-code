import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public bird: IBird) {
    Object.assign(this, bird)
  }

  fly (): string | Error {
    return this.bird.name
  }
}

export class Eagle extends Bird {
  fly (): string {
    return this.bird.name
  }
}

export class Penguin extends Bird {
  fly (): Error {
    return new Error('I cant Fly')
  }

  walk (): string {
    return this.bird.name
  }

  swim (): string {
    return this.bird.name
  }
}
