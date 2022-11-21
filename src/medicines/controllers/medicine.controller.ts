import { IMedicineController } from "./medicine.controller.interface";
import { IMedicineService } from "./../services/medicine.service.interface";
import { StatusCode } from "../../utils/statusCode/status.code";
import { Request, Response } from "express";
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

  async getById(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.getById(req.params.id);
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.OK).json(medicine);
  }

  async create(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.create(req.body);
    if ("promiseError" in medicine) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(medicine);
      return;
    }
    res.status(StatusCode.CREATED).json(medicine);
  }

  async update(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.update(req.body);
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
