export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`Error in the Param: ${name}`)
    this.name = `Error in the Param: ${name}`
  }
}
