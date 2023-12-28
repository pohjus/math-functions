// Import the function to be tested
const { add, subtract, multiply, divide } = require("../src/mathFunctions"); // Adjust the path according to your project structure

describe("Arithmetic operations", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("division by zero throws error", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
