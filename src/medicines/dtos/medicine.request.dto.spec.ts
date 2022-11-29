
import { fakeMedicine } from "../__mocks__/fake.medicine.data";
import { MedicineRequestDTO } from "../dtos/medicine.request.dto";

const medicine = new MedicineRequestDTO(fakeMedicine);

describe("UserDto", () => {
  it("should be defined", () => {
    expect(medicine).toBeDefined();
  });
  it("should have a name", () => {
    expect(medicine.name).toBeDefined();
  });
  it("should have an email", () => {
    expect(medicine.description).toBeDefined();
  });
  it("should have an age", () => {
    expect(medicine.price).toBeDefined();
  });
  it("should have a cpf", () => {
    expect(medicine.quantity).toBeDefined();
  });
  it("should have a brand", () => {
    expect(medicine.brand).toBeDefined();
  });
});