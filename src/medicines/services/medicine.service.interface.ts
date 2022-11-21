import { ICustomError } from "../../utils/errorHandler/error.handler.interface";
import { IMedicine } from "../models/medicine.model.interface";

export interface IMedicineService {
  getAll(): Promise<IMedicine[] | ICustomError>;
  getById(id: string): Promise<IMedicine | ICustomError>;
  create(medicine: IMedicine): Promise<IMedicine | ICustomError>;
  update(medicine: IMedicine): Promise<IMedicine | ICustomError>;
  delete(id: string): Promise<string | ICustomError>;
}
