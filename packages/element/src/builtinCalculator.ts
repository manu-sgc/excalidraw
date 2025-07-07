export function evaluateExpression(input: string): string {
  if (!input.trim().endsWith("=")) return input;

  const expression = input.slice(0, -1);
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    if (typeof result === "number" && isFinite(result)) {
      return `${expression}=${result}`;
    }
  } catch {
    // erro de sintaxe, etc.
  }
  return input;
}