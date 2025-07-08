import { validateHexColor } from "./hexColorValidator";

describe("Hex Color Validator - validação de caracteres permitidos (0-9, A-F)", () => {
  it("deve retornar erro se houver caracteres especiais", () => {
    expect(validateHexColor("12!@")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("abc$")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("#12#34")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("1111111*")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
  });

  it("deve retornar erro se houver letras fora de A-F", () => {
    expect(validateHexColor("blue")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("123xyz")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("hello")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
    expect(validateHexColor("abcdeg")).toBe("Error: apenas dígitos 0-9 e letras A-F são permitidos");
  });

  it("deve aceitar apenas letras de A-F e números", () => {
    expect(validateHexColor("abc")).toBe(null);
    expect(validateHexColor("ABC")).toBe(null);
    expect(validateHexColor("123ABC")).toBe(null);
    expect(validateHexColor("a1b2c3")).toBe(null);
    expect(validateHexColor("12345678")).toBe(null);
  });
});

describe("Hex Color Validator - 3º ciclo: rejeitar código hexadecimal com 1 dígito", () => {
  it("deve retornar erro se o código tiver apenas 1 caractere", () => {
    expect(validateHexColor("F")).toBe("Error: tamanho inválido");
    expect(validateHexColor("0")).toBe("Error: tamanho inválido");
    expect(validateHexColor("a")).toBe("Error: tamanho inválido");
  });

  it("deve continuar aceitando entradas válidas com 2 ou mais caracteres", () => {
    expect(validateHexColor("123")).toBe(null);
    expect(validateHexColor("abcdef")).toBe(null);
  });
});

describe("Hex Color Validator - 4º ciclo: rejeitar código hexadecimal com 2 dígitos", () => {
  it("deve retornar erro se o código tiver apenas 2 caracteres", () => {
    expect(validateHexColor("F1")).toBe("Error: tamanho inválido");
    expect(validateHexColor("02")).toBe("Error: tamanho inválido");
    expect(validateHexColor("a8")).toBe("Error: tamanho inválido");
  });

  it("deve continuar aceitando entradas válidas com 3 ou mais caracteres", () => {
    expect(validateHexColor("ABC")).toBe(null);
    expect(validateHexColor("123")).toBe(null);
    expect(validateHexColor("abcdef12")).toBe(null);
  });
});

describe("Hex Color Validator - 5º ciclo: rejeitar código hexadecimal com 5 dígitos", () => {
  it("deve retornar erro se o código tiver apenas 5 caracteres", () => {
    expect(validateHexColor("F1F2F")).toBe("Error: tamanho inválido");
    expect(validateHexColor("02468")).toBe("Error: tamanho inválido");
    expect(validateHexColor("a8bcd")).toBe("Error: tamanho inválido");
  });

  it("deve continuar aceitando entradas válidas com 3, 4 ou mais que 5 caracteres", () => {
    expect(validateHexColor("ABCD")).toBe(null);
    expect(validateHexColor("123")).toBe(null);
    expect(validateHexColor("abcdef")).toBe(null);
  });
});

describe("Hex Color Validator - 6º ciclo: rejeitar código hexadecimal com 7 dígitos", () => {
  it("deve retornar erro se o código tiver apenas 7 caracteres", () => {
    expect(validateHexColor("F1F2F3F")).toBe("Error: tamanho inválido");
    expect(validateHexColor("0246810")).toBe("Error: tamanho inválido");
    expect(validateHexColor("a8bcdef")).toBe("Error: tamanho inválido");
  });

  it("deve continuar aceitando entradas válidas com 3, 4, 6 ou mais que 7 caracteres", () => {
    expect(validateHexColor("ABCD")).toBe(null);
    expect(validateHexColor("123")).toBe(null);
    expect(validateHexColor("abcdef")).toBe(null);
    expect(validateHexColor("abcdef12")).toBe(null);
  });
});

describe("Hex Color Validator - 8º ciclo: rejeitar código hexadecimal com mais de 8 dígitos", () => {
  it("deve retornar erro se o código tiver mais de 8 caracteres", () => {
    expect(validateHexColor("123456789")).toBe("Error: tamanho inválido");
    expect(validateHexColor("ABCDEF123")).toBe("Error: tamanho inválido");
    expect(validateHexColor("FFFFFFFFF")).toBe("Error: tamanho inválido");
    expect(validateHexColor("0123456789ABCDEF")).toBe("Error: tamanho inválido");
  });

  it("deve continuar aceitando códigos com até 8 caracteres válidos", () => {
    expect(validateHexColor("ABC")).toBe(null);
    expect(validateHexColor("ABCD")).toBe(null);
    expect(validateHexColor("123456")).toBe(null);
    expect(validateHexColor("A1B2C3D4")).toBe(null);
    expect(validateHexColor("abcdef12")).toBe(null);
  });
});