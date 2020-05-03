import { mapSortByToDefaultValue, mapStateToSortObject } from "./helpers";

describe("helpers", () => {
  test("mapStateToSortObject return 1", () => {
    expect(mapSortByToDefaultValue("priority", "desc")).toBe(1);
  });
  test("mapStateToSortObject return 2", () => {
    expect(mapSortByToDefaultValue("priority", "asc")).toBe(2);
  });

  test("mapStateToSortObject return default", () => {
    expect(mapStateToSortObject(3)).toEqual({ prop: "priority", dir: "desc" });
  });
  test("mapStateToSortObject first case", () => {
    expect(mapStateToSortObject(1)).toEqual({ prop: "priority", dir: "desc" });
  });
  test("mapStateToSortObject second case", () => {
    expect(mapStateToSortObject(2)).toEqual({ prop: "priority", dir: "asc" });
  });
});
