import { fakeMedicines, fakeMedicine } from "./fake.medicine.data";
import { IMedicineRepository } from "../repositories/abstraction/medicine.repository.interface";
import { Medicine, MedModel } from "../models/medicine.model";

export class FakeMedicineRepository implements IMedicineRepository {
  constructor(private readonly medicineModel: MedModel) {}
  getAll(): Promise<Medicine[]> {
    return Promise.resolve(fakeMedicines);
  }

  getById(id: string): Promise<Medicine> {
    return Promise.resolve(fakeMedicine);
  }

  create(medicine: Medicine): Promise<Medicine> {
    return Promise.resolve(fakeMedicine);
  }

  update(medicine: Medicine): Promise<Medicine> {
    return Promise.resolve(fakeMedicine);
  }

  delete(id: string): Promise<string> {
    return Promise.resolve(`Medicine with id ${id} deleted`);
  }
}
