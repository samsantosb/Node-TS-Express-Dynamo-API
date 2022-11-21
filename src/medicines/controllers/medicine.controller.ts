import { IMedicineController } from "./medicine.controller.interface";
import { IMedicineService } from "./../services/medicine.service.interface";
import { StatusCode } from "../../utils/statusCode/status.code";
export class MedicineController implements IMedicineController {
  constructor(private readonly medicineService: IMedicineService) {}
  async getAll(req: Request, res: Response): Promise<void> {
    const medcines = await this.medicineService.getAll();
    if ("promiseError" in medcines) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medcines);
      return;
    }
    res.status(StatusCode.OK).json(medcines);
  }
}
