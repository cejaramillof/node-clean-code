export class Vehicle {
  public id: number
  public name: string
  public description: string

  constructor (props: Vehicle) {
    // this.props.id = props.id
    Object.assign(this, props)
  }
}
