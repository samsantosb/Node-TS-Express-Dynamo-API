export interface IMedicine {
  id?: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  brand: string;
}

export class MedicineRequestDTO {
  name: string;
  description: string;
  price: string;
  quantity: number;
  brand: string;

  constructor(public medicine: IMedicine) {
    this.name = medicine.name;
    this.description = medicine.description;
    this.price = medicine.price;
    this.quantity = medicine.quantity;
    this.brand = medicine.brand;
  }
}
