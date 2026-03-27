"use client";

import { Button } from "@/components/button";
import LogoCamargoAdvocacia from "@/public/logo.svg";
import themisImage from "@/public/themis.svg";
import Link from "next/link";
import Image from "next/image";
import { HomeBackground } from "@/components/background";

const consoleMessage = `

 ██████╗ █████╗ ███╗   ███╗ █████╗ ██████╗  ██████╗  ██████╗         
██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝ ██╔═══██╗        
██║     ███████║██╔████╔██║███████║██████╔╝██║  ███╗██║   ██║        
██║     ██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║   ██║██║   ██║        
╚██████╗██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╔╝╚██████╔╝        
 ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝         
                                                                     
 █████╗ ██████╗ ██╗   ██╗ ██████╗  ██████╗ █████╗  ██████╗██╗ █████╗ 
██╔══██╗██╔══██╗██║   ██║██╔═══██╗██╔════╝██╔══██╗██╔════╝██║██╔══██╗
███████║██║  ██║██║   ██║██║   ██║██║     ███████║██║     ██║███████║
██╔══██║██║  ██║╚██╗ ██╔╝██║   ██║██║     ██╔══██║██║     ██║██╔══██║
██║  ██║██████╔╝ ╚████╔╝ ╚██████╔╝╚██████╗██║  ██║╚██████╗██║██║  ██║
╚═╝  ╚═╝╚═════╝   ╚═══╝   ╚═════╝  ╚═════╝╚═╝  ╚═╝ ╚═════╝╚═╝╚═╝  ╚═╝
                                                                     
`;

console.log(consoleMessage);

export default function Home() {
  return (
    <>
      <HomeBackground />
      <main className="relative h-dvh w-full flex items-center justify-center">
        <section className="h-3/4 w-4/5 mt-16 grid grid-cols-1  lg:grid-cols-2 lg:grid-rows-4">
          <div className="flex justify-center items-center lg:row-span-2">
            <Image
              loading="eager"
              src={LogoCamargoAdvocacia}
              alt="logo camargo advocacia"
              className="h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-base text-center font-bold ">
              Defendendo seus direitos com excelência e compromisso, nossa
              atuação é pautada pela ética inabalável e pela busca incessante
              por soluções jurídicas precisas para cada cliente.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="cursor-pointer rounded-2xl w-full shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <Link href="/agendar">Agendar</Link>
            </Button>
          </div>
          <div className="hidden lg:flex items-center justify-center lg:col-start-2 lg:row-start-1 lg:row-span-4 overflow-visible">
            <Image
              src={themisImage}
              alt="Imagem de Themis"
              className="h-full w-auto object-contain transition-all duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
        </section>
      </main>
    </>
  );
}
