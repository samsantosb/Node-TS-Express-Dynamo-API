import { Item } from "dynamoose/dist/Item";
import { ModelType } from "dynamoose/dist/General";

export class Medicine extends Item {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  brand: string;
}

export interface IMedicine extends Medicine {}

export interface IMedicineModel extends ModelType<Medicine> {}
