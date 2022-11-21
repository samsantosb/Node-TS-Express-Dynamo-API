import { IMedicineModel, IMedicine } from "../models/medicine.model.interface";
import { IMedicineRepository } from "./medicine.repository.interface";
export class MedicineRepository implements IMedicineRepository {
  constructor(private readonly medicineModel: IMedicineModel) {}

  async getAll(): Promise<IMedicine[]> {
    const medicines = await this.medicineModel.scan().exec();
    return medicines;
  }

  async getById(id: string): Promise<IMedicine> {
    const medicine = await this.medicineModel.get(id);
    return medicine;
  }

  async create(medicine: IMedicine): Promise<IMedicine> {
    const createdMedicine = await this.medicineModel.create(medicine);
    return createdMedicine;
  }

  async update(medicine: IMedicine): Promise<IMedicine> {
    const updatedMedicine = await this.medicineModel.update(medicine);
    return updatedMedicine;
  }

  async delete(id: string): Promise<string> {
    await this.medicineModel.delete(id);
    return `Medicine with id ${id} deleted`;
  }
}
