const addAllElements = require("../src/index.js");

describe("add all elements", () => {
  test("normal array to be 710", () => {
    console.log;
    expect(addAllElements([33, 565, 56, 56])).toBe(710);
  });

  test("empty array to be 0", () => {
    expect(addAllElements([])).toBe(0);
  });

  test("do not fail with string number", () => {
    expect(addAllElements([33, "233", 56, 56])).toBe(378);
  });

  test("do not fail with string word", () => {
    expect(addAllElements([33, "hello", 56, 56])).toBe(145);
  });

  test("to throw an error", () => {
    expect(() => {
      addAllElements("wtf");
    }).toThrow();
  });

  test("to throw an error", () => {
    expect(() => {
      addAllElements(3);
    }).toThrow();
  });
});
