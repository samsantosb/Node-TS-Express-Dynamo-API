import { ICustomError } from "./../../utils/errorHandler/error.handler.interface";
import { IMedicineService } from "./medicine.service.interface";
import { IMedicine } from "../models/medicine.model.interface";
import { IMedicineRepository } from "./../repositories/medicine.repository.interface";
import { promiseError } from "../../utils/errorHandler/error.handler";
export class MedicineService implements IMedicineService {
  constructor(private readonly medicineRepository: IMedicineRepository) {}
  async getAll(): Promise<IMedicine[]> {
    try {
      const medicines = await this.medicineRepository.getAll();
      return medicines;
    } catch (error) {
      throw promiseError(error);
    }
  }

  async getById(id: string): Promise<IMedicine | ICustomError> {
    try {
      const medicine = await this.medicineRepository.getById(id);
      return medicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(medicine: IMedicine): Promise<IMedicine | ICustomError> {
    try {
      const createdMedicine = await this.medicineRepository.create(medicine);
      return createdMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(medicine: IMedicine): Promise<IMedicine | ICustomError> {
    try {
      const updatedMedicine = await this.medicineRepository.update(medicine);
      return updatedMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async delete(id: string): Promise<string | ICustomError> {
    try {
      const deletedMedicine = await this.medicineRepository.delete(id);
      return deletedMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }
}
