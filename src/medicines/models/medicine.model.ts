import { Schema, model } from "dynamoose";
import { ModelType } from "dynamoose/dist/General";
import { Item } from "dynamoose/dist/Item";

const MedicineSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});
export class Medicine extends Item {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  brand: string;
}

export type MedModel = ModelType<Medicine>;

export const MedicineModel: MedModel = model("Medicine", MedicineSchema);
