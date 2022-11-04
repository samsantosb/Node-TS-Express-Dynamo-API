import { PatientController } from "../controllers/patient.controller";
import { PatientService } from "../services/patient.service";
import { PatientRepository } from "../repositories/patient.repository";
import { PatientModel } from "../models/patient.model";

export function PatientFactory() {
  const patientModel = PatientModel;
  const patientRepository = new PatientRepository(patientModel);
  const patientService = new PatientService(patientRepository);
  const patientController = new PatientController(patientService);
  return patientController;
}

export const patient = PatientFactory();
