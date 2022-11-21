import { ICustomError } from "../../utils/errorHandler/error.handler.type";
import { fakeMedicines, fakeMedicine } from "./fake.medicine.data";
import { IMedicineRepository } from "./../repositories/medicine.repository.interface";
import { IMedicineService } from "./../services/medicine.service.interface";
import { IMedicine } from "../models/medicine.model.interface";
import { promiseError } from "../../utils/errorHandler/error.handler";
export class FakeMedicineService implements IMedicineService {
  constructor(private readonly medicineRepository: IMedicineRepository) {}

  async getAll(): Promise<IMedicine[] | ICustomError> {
    try {
      return Promise.resolve(fakeMedicines);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async getById(id: string): Promise<IMedicine | ICustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async create(medicine: IMedicine): Promise<IMedicine | ICustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async update(medicine: IMedicine): Promise<IMedicine | ICustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async delete(id: string): Promise<string | ICustomError> {
    try {
      return Promise.resolve(`Medicine with id ${id} deleted`);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }
}
