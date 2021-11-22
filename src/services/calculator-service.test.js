import { EvaluateExpression, SquareRoot } from "./calculator-service.js";

describe("calculator-service", () => {
  it("should make correct evaluation with correct input", () => {
    const result = EvaluateExpression("7+8*4/2-1");
    expect(result).toEqual(22);
  });

  it("should return ERROR when expression is wrong", () => {
    const result = EvaluateExpression("7+8a*4/2-1");
    expect(result).toEqual("ERROR");
  });

  it("should return correct result when calculates squre root", () => {
    const result = SquareRoot("2+7");
    expect(result).toEqual(3);
  });
});
