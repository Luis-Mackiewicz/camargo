"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
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
import { SendHorizonal } from "lucide-react";
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
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3640.8260015049045!2d-52.7821633!3d-24.142748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f280d61498ce6b%3A0x82a00122dd0aa7c5!2sCamargo%20Advocacia%20e%20Assessoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1772710914354!5m2!1spt-BR!2sbr"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-4/5 h-3/4 rounded-xl md:w-full md:h-auto lg:h-3/4"
    ></iframe>
  );
};

const SelectOption = ({ control }: SelectOptionProps) => {
  return (
    <Controller
      control={control}
      name="area"
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
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

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/obrigado");
        form.reset();
      } else {
        console.error("Erro na resposta da API");
      }
    } catch (error) {
      console.error("Erro ao enviar", error);
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
            className="flex items-center justify-center  bg-white/95 row-span-2 md:col-span-2 rounded-b-xl md:rounded-xl md:rounded-l-none"
          >
            <fieldset className="w-4/5 flex flex-col gap-2.5 md:gap-5 overflow-y-auto max-h-full pr-2">
              <div className="flex flex-col">
                <Input
                  type="text"
                  placeholder="nome"
                  className="selection:bg-blue-900"
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
                  type="email"
                  placeholder="email"
                  className="selection:bg-blue-900"
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
                  type="tel"
                  placeholder="número"
                  className="selection:bg-blue-900"
                  {...form.register("phone")}
                />

                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <SelectOption control={form.control} />
                {form.formState.errors.area && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.area.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <Textarea {...form.register("message")} />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                variant="default"
                className="
                cursor-pointer
                rounded-2xl
                shadow-2xl
               bg-blue-900
               text-white
                flex items-center gap-2
                transition-all
               duration-300
                ease-in-out
               hover:bg-green-600
                active:scale-95
                disabled:opacity-50
  "
                disabled={!form.formState.isValid}
              >
                enviar
                <SendHorizonal className="w-4 h-4" />
              </Button>
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
}
