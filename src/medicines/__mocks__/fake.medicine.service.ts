import { IMedicineRepository } from "./../repositories/medicine.repository.interface";
import { IMedicineService } from "./../services/medicine.service.interface";
export class FakeMedicineService implements IMedicineService {
  constructor(private readonly medicineRepository: IMedicineRepository) {}
  async getAll(): Promise<any> {
    return [];
  }
}
