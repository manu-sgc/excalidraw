import { validateHexColor } from "./hexColorValidator";

describe("Hex Color Validator", () => {
  it("deve rejeitar caracteres inválidos (fora de 0-9, A-F)", () => {
    const invalidInputs = ["12!@", "abc$", "#12#34", "1111111*", "blue", "123xyz", "hello", "abcdeg"];
    invalidInputs.forEach((input) => {
      expect(validateHexColor(input)).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    });
  });

  it("deve aceitar apenas letras A-F e números", () => {
    const validInputs = ["abc", "ABC", "123ABC", "a1b2c3", "12345678"];
    validInputs.forEach((input) => {
      expect(validateHexColor(input)).toBe(null);
    });
  });

  it("deve rejeitar tamanhos inválidos (1, 2, 5, 7, >8)", () => {
    const invalidSizes = ["F", "0", "a", "F1", "02", "a8", "F1F2F", "02468", "a8bcd", "F1F2F3F", "0246810", "a8bcdef", "123456789", "ABCDEF123", "FFFFFFFFF", "0123456789ABCDEF"];
    invalidSizes.forEach((input) => {
      expect(validateHexColor(input)).toBe("Error: tamanho inválido");
    });
  });

  it("deve aceitar tamanhos válidos (3, 4, 6, 8)", () => {
    const validSizes = ["123", "ABC", "ABCD", "abcdef", "abcdef12", "A1B2C3D4"];
    validSizes.forEach((input) => {
      expect(validateHexColor(input)).toBe(null);
    });
  });
});


//npx vitest run packages/excalidraw/components/ColorPicker/hexColorValidator.test.ts