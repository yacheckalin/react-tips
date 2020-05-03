import { PRIORITY_HIGH, PRIORITY_MIDDLE, PRIORITY_LOW } from "./constants";

describe("constants", () => {
  test("PRIORITY_HIGH exists", () => {
    expect(PRIORITY_HIGH).toBe(0);
  });
  test("PRIORITY_MIDDLE exists", () => {
    expect(PRIORITY_MIDDLE).toBe(1);
  });
  test("PRIORITY_LOW exists", () => {
    expect(PRIORITY_LOW).toBe(2);
  });
});
