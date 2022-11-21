import { faker } from "@faker-js/faker";
import { fakeMedicine, fakeMedicines } from "./../__mocks__/fake.medicine.data";
import { FakeMedicineRepository } from "../__mocks__/fake.medicine.repository";
import { MedicineService } from "./medicine.service";
import { jest, describe, it, expect } from "@jest/globals";
import { fakeMedicineModel } from "../__mocks__/fake.medicine.model";


const medicineRepository = new FakeMedicineRepository(fakeMedicineModel);
const medicineService = new MedicineService(medicineRepository);

describe("MedicineService", () => {
  describe("getAll", () => {
    it("should return all medicines", async () => {
      const medicines = await medicineService.getAll();
      expect(medicines).toEqual(fakeMedicines);
    });
    it("it should return promiseError", async () => {
      jest.spyOn(medicineRepository, "getAll").mockRejectedValueOnce("Error");
      const error = await medicineService.getAll();
      expect(error).toEqual({ promiseError: { message: "Error during the Database request", error: "Error" } });
    });
  });
  describe("getById", () => {
    it("should return a medicine by id", async () => {
      const medicine = await medicineService.getById(faker.datatype.uuid());
      expect(medicine).toEqual(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      jest.spyOn(medicineRepository, "getById").mockRejectedValueOnce("Error");
      const error = await medicineService.getById(faker.datatype.uuid());
      expect(error).toEqual({ promiseError: { message: "Error during the Database request", error: "Error" } });
    });
  });
  describe("create", () => {
    it("should create a medicine", async () => {
      const medicine = await medicineService.create(fakeMedicine);
      expect(medicine).toEqual(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      jest.spyOn(medicineRepository, "create").mockRejectedValueOnce("Error");
      const error = await medicineService.create(fakeMedicine);
      expect(error).toEqual({ promiseError: { message: "Error during the Database request", error: "Error" } });
    });
  });
  describe("update", () => {
    it("should update a medicine", async () => {
      const medicine = await medicineService.update(fakeMedicine);
      expect(medicine).toEqual(fakeMedicine);
    });
    it("it should return promiseError", async () => {
      jest.spyOn(medicineRepository, "update").mockRejectedValueOnce("Error");
      const error = await medicineService.update(fakeMedicine);
      expect(error).toEqual({ promiseError: { message: "Error during the Database request", error: "Error" } });
    });
  });
  describe("delete", () => {
    it("should delete a medicine", async () => {
      const id = faker.datatype.uuid();
      const message = await medicineService.delete(id);
      expect(message).toEqual(`Medicine with id ${id} deleted`);
    });
    it("it should return promiseError", async () => {
      jest.spyOn(medicineRepository, "delete").mockRejectedValueOnce("Error");
      const error = await medicineService.delete(fakeMedicine.id);
      expect(error).toEqual({ promiseError: { message: "Error during the Database request", error: "Error" } });
    });
  });
});