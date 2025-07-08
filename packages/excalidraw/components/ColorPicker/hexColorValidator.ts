export function validateHexColor(input: string): string | null {
  if (!/^[0-9a-fA-F]+$/.test(input)) {
    return "Error: apenas dígitos 0-9 e letras A-F são permitidos";
  }

  if (input.length === 3 || input.length === 4 || input.length === 6 || input.length === 8) {
    return null;
  }

  if (input.length > 8 || input.length === 1 || input.length === 2 || input.length === 5 || input.length === 7) {
    return "Error: tamanho inválido";
  }

  return null;
}
