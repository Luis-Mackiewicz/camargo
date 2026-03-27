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
import { SendHorizonal, Loader2 } from "lucide-react";
import Image from "next/image";
import { useForm, Controller, Control } from "react-hook-form";
import * as z from "zod";
import { AgendarBackground } from "@/components/background";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(255, "O nome não pode ter mais de 255 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  area: z.string().min(1, "Selecione uma área"),
  message: z.string().min(10, "Mensagem precida de no minimo 10 caracteres!"),
});

type FormData = z.infer<typeof formSchema>;
type SelectOptionProps = {
  control: Control<FormData>;
  disabled?: boolean;
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14515.688846387!2d-52.3551!3d-24.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-4/5 h-3/4 rounded-xl md:w-full md:h-auto lg:h-3/4"
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
          defaultValue={field.value}
          disabled={disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="áreas do direito" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Áreas do direito</SelectLabel>
              <SelectItem value="civil">direito civil</SelectItem>
              <SelectItem value="penal">direito penal</SelectItem>
              <SelectItem value="trabalhista">direito trabalhista</SelectItem>
              <SelectItem value="previdenciario">
                direito previdenciário
              </SelectItem>
              <SelectItem value="empresarial">direito empresarial</SelectItem>
              <SelectItem value="familia">direito da família</SelectItem>
              <SelectItem value="consumidor">direito do consumidor</SelectItem>
              <SelectItem value="outro">outro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default function Agendar() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
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

  // Lógica do Cooldown sem disparar cascading renders
  useEffect(() => {
    if (cooldown === 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          setStatus("idle"); // Reseta o status aqui, de forma assíncrona dentro do interval
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]); // Depende apenas do cooldown inicial

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setCooldown(30);
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Erro ao enviar", error);
      setStatus("idle");
    }
  };

  return (
    <>
      <AgendarBackground />
      <main className="relative h-dvh w-full flex items-center justify-center">
        <div className="h-3/4 w-4/5 grid grid-cols-1 grid-rows-3 bg-blue-950 border-0 shadow-2xl rounded-2xl md:grid-cols-3 md:grid-rows-1">
          <aside className="p-2 flex flex-col items-center justify-center gap-2 md:p-8 lg:p-16">
            <Image
              src={CamargoLogo}
              alt="logo camargo advocacia"
              loading="eager"
              className="hidden lg:flex"
            />
            <p className="text-white text-base font-bold">Localização:</p>
            <Map />
            <div></div>
          </aside>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center bg-white/95 row-span-2 md:col-span-2 rounded-b-xl md:rounded-xl md:rounded-l-none"
          >
            <fieldset className="w-4/5 flex flex-col gap-2.5 md:gap-5 overflow-y-auto max-h-full pr-2 py-4">
              <div className="flex flex-col">
                <Input
                  placeholder="nome"
                  className="selection:bg-blue-900"
                  disabled={status === "sending" || cooldown > 0}
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <Input
                  placeholder="email"
                  className="selection:bg-blue-900"
                  disabled={status === "sending" || cooldown > 0}
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <Input
                  placeholder="número"
                  className="selection:bg-blue-900"
                  disabled={status === "sending" || cooldown > 0}
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <SelectOption
                  control={form.control}
                  disabled={status === "sending" || cooldown > 0}
                />
                {form.formState.errors.area && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.area.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <Textarea
                  {...form.register("message")}
                  disabled={status === "sending" || cooldown > 0}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                variant="default"
                className={`cursor-pointer rounded-2xl shadow-2xl text-white flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50 h-11
                ${status === "success" ? "bg-green-600" : "bg-blue-900 hover:bg-green-600"}`}
                disabled={
                  !form.formState.isValid ||
                  status === "sending" ||
                  cooldown > 0
                }
              >
                {status === "sending" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : cooldown > 0 ? (
                  `aguarde ${cooldown}s`
                ) : (
                  <>
                    enviar <SendHorizonal className="w-4 h-4" />
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
