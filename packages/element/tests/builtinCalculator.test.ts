import { describe, it, expect } from "vitest";
import { evaluateExpression } from "../src/builtinCalculator";

it("should evaluate a simple expression ending with '='", () => {
  expect(evaluateExpression("2+2=")).toBe("2+2=4");
  expect(evaluateExpression("10 - 3=")).toBe("10 - 3=7");
  expect(evaluateExpression("4 * 5=")).toBe("4 * 5=20");
  expect(evaluateExpression("8 / 2=")).toBe("8 / 2=4");
  expect(evaluateExpression("-4 + 1=")).toBe("-4 + 1=-3");
});

it("should return input unchanged if it doesn't end with '='", () => {
  expect(evaluateExpression("2+2")).toBe("2+2");
});

it("should support expressions with parentheses", () => {
  expect(evaluateExpression("2 * (3 + 4)=")).toBe("2 * (3 + 4)=14");
  expect(evaluateExpression("2 * [36 / (8 + 4)]=")).toBe("2 * [36 / (8 + 4)]=6");
});

it("should support expressions with decimals", () => {
  expect(evaluateExpression("1.5 + 2.5=")).toBe("1.5 + 2.5=4");
});

it("should return original input if expression is invalid", () => {
  expect(evaluateExpression("2++2=")).toBe("2++2=");
  expect(evaluateExpression("abc=")).toBe("abc=");
});