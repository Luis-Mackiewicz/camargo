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

function SelectOption() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
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

      <div className="h-3/4 w-4/5 bg-blue-950 border-0 shadow-2xl rounded-xl">
        <div className="bg-red-500"></div>
        <form action="" className="w-4/5 text-black bg-white">
          <Input type="text" placeholder="nome" />
          <Input type="email" placeholder="email" />
          <Input type="number" placeholder="número" />
          <SelectOption />
          <Textarea className="" />
          <Button
            variant="default"
            className="curosr-pointer rounded-2xl transition-all shadow-2xl bg-blue-800 duration-300 hover:scale-110 hover:cursor-pointer hover:bg-linear-to-r from-green-500 to-green-700"
          >
            enviar
            <SendHorizonal className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </main>
  );
}
