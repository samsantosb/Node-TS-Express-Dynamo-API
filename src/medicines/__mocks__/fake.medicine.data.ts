import { faker } from "@faker-js/faker";
import { Medicine } from "../models/medicine.model.interface";

//crete a fake medcine
export const fakeMedicine = {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  quantity: faker.datatype.number(),
  brand: faker.company.name(),
} as unknown as Medicine;

export const fakeMedicines: Array<Medicine> = Array.from(
  { length: 10 },
  () => fakeMedicine
);
