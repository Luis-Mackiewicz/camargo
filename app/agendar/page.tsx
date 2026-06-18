"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Textarea } from "@/components/textarea";
import CamargoLogo from "@/public/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal, Loader2, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { AgendarBackground } from "@/components/background";

const API_URL = "https://api.web3forms.com/submit";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "fad04dd5-3ebe-47c7-8f45-bcc77507fc79";

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

type FormData = z.infer<typeof formSchema>;
type SelectOptionProps = {
  control: ReturnType<typeof useForm<FormData>>["control"];
  disabled?: boolean;
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.8257826739728!2d-52.78461122382201!3d-24.14275568321062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f280d61498ce6b%3A0x82a00122dd0aa7c5!2sCamargo%20Advocacia%20e%20Assessoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sus!4v1774999002181!5m2!1spt-BR!2sus"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-4/5 h-64 rounded-xl md:w-full md:h-72 lg:h-3/4"
      title="Localização do escritório Camargo Advocacia"
    ></iframe>
  );
};

const SelectOption = ({ control, disabled }: SelectOptionProps) => {
  return (
    <Controller
      control={control}
      name="area"
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          value={field.value}
          disabled={disabled}
        >
          <SelectTrigger
            className="w-full"
            aria-label="Selecione a área do direito"
          >
            <SelectValue placeholder="Áreas do direito" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Áreas do direito</SelectLabel>
              <SelectItem value="civil">Direito Civil</SelectItem>
              <SelectItem value="penal">Direito Penal</SelectItem>
              <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
              <SelectItem value="previdenciario">
                Direito Previdenciário
              </SelectItem>
              <SelectItem value="empresarial">Direito Empresarial</SelectItem>
              <SelectItem value="familia">Direito da Família</SelectItem>
              <SelectItem value="consumidor">Direito do Consumidor</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  return `(${ddd}) ${rest.slice(0, rest.length - 4)}-${rest.slice(-4)}`;
}

export default function Agendar() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [cooldown, setCooldown] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      area: "",
      message: "",
    },
  });

  useEffect(() => {
    if (cooldown === 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          setStatus("idle");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...data,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setCooldown(30);
      } else {
        setStatus("error");
      }
    } catch (err: unknown) {
      console.error("Erro ao enviar", err);
      setStatus("error");
    }
  };

  const isDisabled = status === "sending" || cooldown > 0;

  return (
    <>
      <AgendarBackground />
      <main className="relative h-dvh w-full flex items-center justify-center">
        <div className="h-3/4 w-4/5 grid grid-cols-1 bg-blue-950 border-0 shadow-2xl rounded-2xl lg:grid-cols-3 overflow-hidden">
          <aside className="p-2 flex flex-col items-center justify-center gap-2 md:p-8 lg:p-16 text-center">
            <Image
              src={CamargoLogo}
              alt="logo camargo advocacia"
              loading="eager"
              className="hidden md:flex lg:flex"
            />
            <p className="text-white text-base font-bold">Localização:</p>
            <Map />
          </aside>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center bg-white/95 lg:col-span-2 rounded-b-xl md:rounded-xl lg:rounded-l-none"
            noValidate
          >
            <fieldset className="w-4/5 flex flex-col gap-2.5 md:gap-4 overflow-y-auto max-h-full pr-2 py-6">
              {status === "success" && (
                <div
                  className="flex items-center gap-2 p-3 bg-green-100 border border-green-200 text-green-800 rounded-lg animate-in fade-in slide-in-from-top-1 duration-500"
                  role="alert"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-sm font-medium">
                    E-mail enviado com sucesso! Aguarde para enviar outro.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="flex items-center gap-2 p-3 bg-red-100 border border-red-200 text-red-800 rounded-lg animate-in fade-in slide-in-from-top-1 duration-500"
                  role="alert"
                >
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm font-medium">
                    Erro ao enviar. Tente novamente mais tarde.
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  className="selection:bg-blue-900"
                  disabled={isDisabled}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.name}
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-[12px]" role="alert">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="selection:bg-blue-900"
                  disabled={isDisabled}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.email}
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-[12px]" role="alert">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(XX) XXXXX-XXXX"
                  className="selection:bg-blue-900"
                  disabled={isDisabled}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.phone}
                  {...form.register("phone", {
                    onChange: (e) => {
                      const formatted = formatPhone(e.target.value);
                      e.target.value = formatted;
                    },
                  })}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-[12px]" role="alert">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="area" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Área do direito
                </label>
                <SelectOption
                  control={form.control}
                  disabled={isDisabled}
                />
                {form.formState.errors.area && (
                  <p className="text-red-500 text-[12px]" role="alert">
                    {form.formState.errors.area.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  disabled={isDisabled}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.message}
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-[12px]" role="alert">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                variant="default"
                className={`cursor-pointer rounded-2xl text-white flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50 h-11
                  ${status === "success" ? "bg-green-600" : "bg-blue-900 hover:bg-green-600"}`}
                disabled={
                  !form.formState.isValid ||
                  status === "sending" ||
                  cooldown > 0
                }
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : cooldown > 0 ? (
                  `Aguarde ${cooldown}s`
                ) : (
                  <>
                    Enviar <SendHorizonal className="w-4 h-4" />
                  </>
                )}
              </Button>
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
}
