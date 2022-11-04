import { Schema, model } from "dynamoose";
import { IMedicineModel } from "./medicine.model.interface";

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

export const MedicineModel: IMedicineModel = model("Medicine", MedicineSchema);
