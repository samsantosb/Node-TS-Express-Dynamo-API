import { CustomError } from "../../utils/errorHandler/abstraction/error.handler.type";
import { fakeMedicines, fakeMedicine } from "./fake.medicine.data";
import { IMedicineRepository } from "../repositories/abstraction/medicine.repository.interface";
import { IMedicineService } from "../services/abstraction/medicine.service.interface";
import { Medicine } from "../models/medicine.model";
import { promiseError } from "../../utils/errorHandler/details/error.handler";
export class FakeMedicineService implements IMedicineService {
  constructor(private readonly medicineRepository: IMedicineRepository) {}

  async getAll(): Promise<Medicine[] | CustomError> {
    try {
      return Promise.resolve(fakeMedicines);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async getById(id: string): Promise<Medicine | CustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async create(medicine: Medicine): Promise<Medicine | CustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async update(medicine: Medicine): Promise<Medicine | CustomError> {
    try {
      return Promise.resolve(fakeMedicine);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }

  async delete(id: string): Promise<string | CustomError> {
    try {
      return Promise.resolve(`Medicine with id ${id} deleted`);
    } catch (error) {
      return Promise.resolve(promiseError(error));
    }
  }
}
