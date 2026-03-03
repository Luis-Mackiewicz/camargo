import { Button } from "@/components/button";
import LogoCamargoAdvocacia from "@/public/logo.svg";
import themisImage from "@/public/themis.svg";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/bg-images/background-home.svg')] bg-cover opacity-50 -z-10" />
      <section className="h-3/4 w-4/5 mt-16 grid grid-cols-1  lg:grid-cols-2 lg:grid-rows-3">
        <div className="flex justify-center items-center">
          <Image
            src={LogoCamargoAdvocacia}
            alt="logo camargo advocacia"
            className="h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-center font-bold">
            Defendendo seus direitos com excelência e compromisso
          </p>
        </div>
        <div className=" flex items-center justify-center w-full">
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="cursor-pointer rounded-2xl w-full"
          >
            <Link href="/agendar">Agendar</Link>
          </Button>
        </div>
        <div className="hidden lg:flex items-center justify-center lg:col-start-2 lg:row-start-1 lg:row-span-3 overflow-hidden">
          <Image
            src={themisImage}
            alt="Imagem de Themis"
            className="h-full w-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
