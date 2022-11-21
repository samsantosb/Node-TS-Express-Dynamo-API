import { Medicine, MedModel } from "./../models/medicine.model";
import { fakeMedicine, fakeMedicines } from "./fake.medicine.data";

export class FakeMedicineModel {
  scan(): { exec(): Promise<Medicine[]> } {
    return {
      exec: () => Promise.resolve(fakeMedicines),
    };
  }

  get(id: string): Promise<Medicine> {
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

export const fakeMedicineModel = new FakeMedicineModel() as unknown as MedModel;
