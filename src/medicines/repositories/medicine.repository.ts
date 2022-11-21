import { ModelType } from "dynamoose/dist/General";
import { Medicine, MedModel } from "../models/medicine.model";
import { IMedicineRepository } from "./medicine.repository.interface";
export class MedicineRepository implements IMedicineRepository {
  constructor(private readonly medicineModel: MedModel) {}

  async getAll(): Promise<Medicine[]> {
    const medicines = await this.medicineModel.scan().exec();
    return medicines;
  }

  async getById(id: string): Promise<Medicine> {
    const medicine = await this.medicineModel.get(id);
    return medicine;
  }

  async create(medicine: Medicine): Promise<Medicine> {
    const createdMedicine = await this.medicineModel.create(medicine);
    return createdMedicine;
  }

  async update(medicine: Medicine): Promise<Medicine> {
    const updatedMedicine = await this.medicineModel.update(medicine);
    return updatedMedicine;
  }

  async delete(id: string): Promise<string> {
    await this.medicineModel.delete(id);
    return `Medicine with id ${id} deleted`;
  }
}
