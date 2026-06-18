import { describe, it, expect } from "vitest";
import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;

const formSchema = z.object({
  name: z
    .string()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(255, "O nome não pode ter mais de 255 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(14, "Telefone inválido. Use o formato (XX) XXXXX-XXXX")
    .regex(phoneRegex, "Telefone inválido. Use o formato (XX) XXXXX-XXXX"),
  area: z.string().min(1, "Selecione uma área"),
  message: z
    .string()
    .min(10, "Mensagem precisa de no mínimo 10 caracteres"),
});

describe("Form Schema Validation", () => {
  it("should validate a correct form submission", () => {
    const result = formSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      phone: "(44) 99999-1234",
      area: "civil",
      message: "Preciso de ajuda com uma causa trabalhista.",
    });
    expect(result.success).toBe(true);
  });

  it("should reject short name", () => {
    const result = formSchema.safeParse({
      name: "Jo",
      email: "joao@email.com",
      phone: "(44) 99999-1234",
      area: "civil",
      message: "Preciso de ajuda com uma causa trabalhista.",
    });
    expect(result.success).toBe(false);
  });

  it("should reject invalid email", () => {
    const result = formSchema.safeParse({
      name: "João Silva",
      email: "email-invalido",
      phone: "(44) 99999-1234",
      area: "civil",
      message: "Preciso de ajuda com uma causa trabalhista.",
    });
    expect(result.success).toBe(false);
  });

  it("should reject invalid phone format", () => {
    const result = formSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      phone: "123",
      area: "civil",
      message: "Preciso de ajuda com uma causa trabalhista.",
    });
    expect(result.success).toBe(false);
  });

  it("should reject empty area", () => {
    const result = formSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      phone: "(44) 99999-1234",
      area: "",
      message: "Preciso de ajuda com uma causa trabalhista.",
    });
    expect(result.success).toBe(false);
  });

  it("should reject short message", () => {
    const result = formSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      phone: "(44) 99999-1234",
      area: "civil",
      message: "Curto",
    });
    expect(result.success).toBe(false);
  });
});

describe("Phone format function", () => {
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);
    if (rest.length <= 4) return `(${ddd}) ${rest}`;
    return `(${ddd}) ${rest.slice(0, rest.length - 4)}-${rest.slice(-4)}`;
  };

  it("should format partial input correctly", () => {
    expect(formatPhone("44")).toBe("(44");
    expect(formatPhone("449")).toBe("(44) 9");
    expect(formatPhone("449999")).toBe("(44) 9999");
    expect(formatPhone("4499991234")).toBe("(44) 9999-1234");
    expect(formatPhone("44999991234")).toBe("(44) 99999-1234");
  });

  it("should strip non-digit characters", () => {
    expect(formatPhone("(44) 99999-1234")).toBe("(44) 99999-1234");
    expect(formatPhone("44abc9999")).toBe("(44) 9999");
  });

  it("should not exceed 11 digits", () => {
    expect(formatPhone("44999991234567890")).toBe("(44) 99999-1234");
  });
});
