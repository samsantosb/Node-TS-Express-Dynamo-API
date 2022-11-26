import { IMedicineController } from "../abstraction/medicine.controller.interface";
import { IMedicineService } from "../../services/abstraction/medicine.service.interface";
import { StatusCode } from "../../../utils/statusCode/status.code";
import { Request, Response } from "express";
import { MedicineRequestDTO } from "../../dtos/medicine.request.dto";
export class MedicineController implements IMedicineController {
  constructor(private readonly medicineService: IMedicineService) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.getAll();
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.OK).json(medicine);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.getById(req.params.id);
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.OK).json(medicine);
  }

  async create(req: Request, res: Response): Promise<void> {
    const body = req.body;
    const medicineDTO = new MedicineRequestDTO(body);

    const medicine = await this.medicineService.create(medicineDTO);
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.CREATED).json(medicine);
  }

  async update(req: Request, res: Response): Promise<void> {
    const body = req.body;
    const medicineDTO = new MedicineRequestDTO(body);

    const medicine = await this.medicineService.update(medicineDTO);
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.OK).json(medicine);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.delete(req.params.id);
    if (typeof medicine !== "string" && "promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.OK).json(medicine);
  }
}
