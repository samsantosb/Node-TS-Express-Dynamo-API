import { Medicine } from "../models/medicine.model.interface";

export interface IMedicineService {
  getAll(): Promise<Medicine[]>;
  getById(id: string): Promise<Medicine>;
  create(medicine: Medicine): Promise<Medicine>;
  update(medicine: Medicine): Promise<Medicine>;
  delete(id: string): Promise<string>;
}
