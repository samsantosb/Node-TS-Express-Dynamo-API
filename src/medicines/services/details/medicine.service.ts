import { CustomError } from "../../../utils/errorHandler/abstraction/error.handler.type";
import { IMedicineService } from "../abstraction/medicine.service.interface";
import { Medicine } from "../../models/medicine.model";
import { IMedicineRepository } from "../../repositories/abstraction/medicine.repository.interface";
import { promiseError } from "../../../utils/errorHandler/details/error.handler";
export class MedicineService implements IMedicineService {
  constructor(private readonly medicineRepository: IMedicineRepository) {}
  async getAll(): Promise<Medicine[] | CustomError> {
    try {
      const medicines = await this.medicineRepository.getAll();
      return medicines;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Medicine | CustomError> {
    try {
      const medicine = await this.medicineRepository.getById(id);
      return medicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(medicine: Medicine): Promise<Medicine | CustomError> {
    try {
      const createdMedicine = await this.medicineRepository.create(medicine);
      return createdMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(medicine: Medicine): Promise<Medicine | CustomError> {
    try {
      const updatedMedicine = await this.medicineRepository.update(medicine);
      return updatedMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }

  async delete(id: string): Promise<string | CustomError> {
    try {
      const deletedMedicine = await this.medicineRepository.delete(id);
      return deletedMedicine;
    } catch (error) {
      return promiseError(error);
    }
  }
}
