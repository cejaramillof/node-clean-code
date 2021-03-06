import { Schema } from 'mongoose'

const VehicleSchema = new Schema({
  name: { type: String },
  email: { type: String },
  model: { type: String },
  year: { type: String },
  color: { type: String }
})

export default VehicleSchema

export class VehicleModel {
  name: string
  email: string
  model: string
  year: string
  color: string
}
