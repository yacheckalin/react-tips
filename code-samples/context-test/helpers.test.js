import { generateRandomArray } from "./helpers";

describe("helpers", () => {
  test("generateRandomArray return an array", () => {
    expect(generateRandomArray(5)).toHaveLength(5);
  });
});
