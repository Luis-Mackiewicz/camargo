import { Input } from "@/components/input";
import Image from "next/image";
import CamargoLogo from "@/public/logo.svg";
import { SendHorizonal } from "lucide-react";
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
import { Button } from "@/components/button";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3640.8260015049045!2d-52.7821633!3d-24.142748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f280d61498ce6b%3A0x82a00122dd0aa7c5!2sCamargo%20Advocacia%20e%20Assessoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1772710914354!5m2!1spt-BR!2sbr"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-4/5 h-3/4 rounded-xl md:w-full md:h-auto lg:h-3/4"
    ></iframe>
  );
}

function SelectOption() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="áreas do direito" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Áreas do direito</SelectLabel>
          <SelectItem value="civil">direito civil</SelectItem>
          <SelectItem value="penal">direito penal</SelectItem>
          <SelectItem value="trabalhista">direito trabalhista</SelectItem>
          <SelectItem value="previdenciario">direito previdenciário</SelectItem>
          <SelectItem value="empresarial">direito empresarial</SelectItem>
          <SelectItem value="familia">direito da família</SelectItem>
          <SelectItem value="consumidor">direito do consumidor</SelectItem>
          <SelectItem value="outro">outro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function Agendar() {
  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
        <div className="absolute inset-0 bg-[url('/bg-images/background-schedulling.svg')] bg-cover bg-center opacity-40" />
      </div>

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
          action=""
          className="flex items-center justify-center  bg-white/95 row-span-2 md:col-span-2 rounded-b-xl md:rounded-xl md:rounded-l-none"
        >
          <fieldset className="w-4/5  flex flex-col gap-2.5">
            <Input
              type="text"
              placeholder="nome"
              className="selection:bg-blue-900"
            />
            <Input
              type="email"
              placeholder="email"
              className="selection:bg-blue-900"
            />
            <Input
              type="number"
              placeholder="número"
              className="selection:bg-blue-900"
            />
            <SelectOption />
            <Textarea />
            <Button
              variant="default"
              className="curosr-pointer rounded-2xl transition-all shadow-2xl bg-blue-900 duration-300 hover:scale-105 hover:cursor-pointer hover:bg-linear-to-r from-green-500 to-green-700"
            >
              enviar
              <SendHorizonal className="w-4 h-4" />
            </Button>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
