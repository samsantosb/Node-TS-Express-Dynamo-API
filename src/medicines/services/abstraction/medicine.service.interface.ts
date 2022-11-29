import { CustomError } from "../../../utils/errorHandler/abstraction/error.handler.type";
import { IMedicine } from "../../dtos/medicine.request.dto";
import { Medicine } from "../../models/medicine.model";

export interface IMedicineService {
  getAll(): Promise<Medicine[] | CustomError>;
  getById(id: string): Promise<Medicine | CustomError>;
  create(medicine: IMedicine): Promise<Medicine | CustomError>;
  update(medicine: IMedicine): Promise<Medicine | CustomError>;
  delete(id: string): Promise<string | CustomError>;
}
