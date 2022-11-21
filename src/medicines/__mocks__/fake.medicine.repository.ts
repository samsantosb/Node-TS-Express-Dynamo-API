import { fakeMedicines, fakeMedicine } from './fake.medicine.data';
import { IMedicineRepository } from './../repositories/medicine.repository.interface';
import { IMedicine, IMedicineModel } from '../models/medicine.model.interface';

export class FakeMedicineRepository implements IMedicineRepository {
  constructor(private readonly medicineModel: IMedicineModel) {}
  getAll(): Promise<IMedicine[]> {
    return Promise.resolve(fakeMedicines);
  }

  getById(id: string): Promise<IMedicine> {
    return Promise.resolve(fakeMedicine);
  }

  create(medicine: IMedicine): Promise<IMedicine> {
    return Promise.resolve(fakeMedicine);
  }

  update(medicine: IMedicine): Promise<IMedicine> {
    return Promise.resolve(fakeMedicine);
  }

  delete(id: string): Promise<string> {
    return Promise.resolve(`Medicine with id ${id} deleted`);
  }
};