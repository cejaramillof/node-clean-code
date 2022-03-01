import { IBird } from '../interfaces/IBird'

/**
 * LSP
 * if S is a subtype of T, then objects of type T may be replaced with objects of type S
 */
export class Bird {
  constructor (public bird: IBird) {
    Object.assign(this, bird)
  }
  /*
  // Breaking Liskov Substitution Principle, because Penguin cant Fly
  fly (): string {
    return this.bird.name
  }
  */
}

export class FlyingBirds extends Bird {
  fly (): string {
    return this.bird.name
  }
}

export class Eagle extends FlyingBirds {
  fly (): string {
    return this.bird.name
  }
}

export class Penguin extends Bird {
  walk (): string {
    return this.bird.name
  }

  swim (): string {
    return this.bird.name
  }
}
