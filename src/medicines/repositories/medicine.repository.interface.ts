import { IMedicine } from "../models/medicine.model.interface";

export interface IMedicineRepository {
  getAll(): Promise<IMedicine[]>;
  getById(id: string): Promise<IMedicine>;
  create(medicine: IMedicine): Promise<IMedicine>;
  update(medicine: IMedicine): Promise<IMedicine>;
  delete(id: string): Promise<string>;
}
