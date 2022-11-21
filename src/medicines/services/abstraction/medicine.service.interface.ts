import { CustomError } from "../../../utils/errorHandler/abstraction/error.handler.type";
import { Medicine } from "../../models/medicine.model";

export interface IMedicineService {
  getAll(): Promise<Medicine[] | CustomError>;
  getById(id: string): Promise<Medicine | CustomError>;
  create(medicine: Medicine): Promise<Medicine | CustomError>;
  update(medicine: Medicine): Promise<Medicine | CustomError>;
  delete(id: string): Promise<string | CustomError>;
}
