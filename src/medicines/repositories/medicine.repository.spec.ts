import { faker } from "@faker-js/faker";
import { fakeMedicine, fakeMedicines } from "./../__mocks__/fake.medicine.data";
import { fakeMedicineModel } from "./../__mocks__/fake.medicine.model";
import { MedicineRepository } from "./../repositories/medicine.repository";
import { jest, describe, it, expect } from "@jest/globals";

const medicineRepository = new MedicineRepository(fakeMedicineModel);

describe("MedicineRepository", () => {
  describe("getAll", () => {
    it("should return all medicines", async () => {
      const medicines = await medicineRepository.getAll();
      expect(medicines).toEqual(fakeMedicines);
    });
  });
  describe("getById", () => {
    it("should return a medicine by id", async () => {
      const medicine = await medicineRepository.getById(faker.datatype.uuid());
      expect(medicine).toEqual(fakeMedicine);
    });
  });
  describe("create", () => {
    it("should create a medicine", async () => {
      const medicine = await medicineRepository.create(fakeMedicine);
      expect(medicine).toEqual(fakeMedicine);
    });
  });
  describe("update", () => {
    it("should update a medicine", async () => {
      const medicine = await medicineRepository.update(fakeMedicine);
      expect(medicine).toEqual(fakeMedicine);
    });
  });
  describe("delete", () => {
    it("should delete a medicine", async () => {
      const id = faker.datatype.uuid();
      const message = await medicineRepository.delete(id);
      expect(message).toEqual(`Medicine with id ${id} deleted`);
    });
  });
});
