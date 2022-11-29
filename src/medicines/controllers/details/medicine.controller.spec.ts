import { mockRequest, mockResponse } from "../../__mocks__/fake.medicine.routes";
import { faker } from "@faker-js/faker";
import {
  fakeMedicine,
  fakeMedicines,
} from "../../__mocks__/fake.medicine.data";
import { MedicineController } from "./medicine.controller";
import { FakeMedicineService } from "../../__mocks__/fake.medicine.service";
import { MedicineRepository } from "../../repositories/details/medicine.repository";
import { MedicineModel } from "../../models/medicine.model";
import { jest, describe, it, expect } from "@jest/globals";
import { fakePromiseError } from "../../__mocks__/fake.promise.error";

const medicineRepository = new MedicineRepository(MedicineModel);
const medicineService = new FakeMedicineService(medicineRepository);
const medicineController = new MedicineController(medicineService);

describe("MedicineController", () => {
  describe("getAll", () => {
    it("should return all medicines", async () => {
      const req = mockRequest();
      const res = mockResponse();
      await medicineController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeMedicines);
    });
    it("it should return promiseError", async () => {
      const req = mockRequest();
      const res = mockResponse();
      jest.spyOn(medicineService, "getAll").mockResolvedValueOnce(fakePromiseError);
      await medicineController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        promiseError: {
          message: "Error during the Database request",
          error: "Error",
        },
      });
    });
  });
  describe("getById", () => {
    it("should return a medicine by id", async () => {
      const req = mockRequest();
      const res = mockResponse();
      req.params.id = faker.datatype.uuid();
      await medicineController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      const req = mockRequest();
      const res = mockResponse();
      jest.spyOn(medicineService, "getById").mockResolvedValueOnce(fakePromiseError);
      await medicineController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        promiseError: {
          message: "Error during the Database request",
          error: "Error",
        },
      });
    });
  });
  describe("create", () => {
    it("should create a medicine", async () => {
      const req = mockRequest();
      const res = mockResponse();
      req.body = fakeMedicine;
      await medicineController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      const req = mockRequest();
      const res = mockResponse();
      jest.spyOn(medicineService, "create").mockResolvedValueOnce(fakePromiseError);
      await medicineController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        promiseError: {
          message: "Error during the Database request",
          error: "Error",
        },
      });
    });
  });
  describe("update", () => {
    it("should update a medicine", async () => {
      const req = mockRequest();
      const res = mockResponse();
      req.body = fakeMedicine;
      await medicineController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      const req = mockRequest();
      const res = mockResponse();
      jest.spyOn(medicineService, "update").mockResolvedValueOnce(fakePromiseError);
      await medicineController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        promiseError: {
          message: "Error during the Database request",
          error: "Error",
        },
      });
    });
  });

  describe("delete", () => {
    it("should delete a medicine", async () => {
      const req = mockRequest();
      const res = mockResponse();
      req.params.id = faker.datatype.uuid();
      await medicineController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
    it("it should return promiseError", async () => {
      const req = mockRequest();
      const res = mockResponse();
      jest.spyOn(medicineService, "delete").mockResolvedValueOnce(fakePromiseError);
      await medicineController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        promiseError: {
          message: "Error during the Database request",
          error: "Error",
        },
      });
    });
  });
});