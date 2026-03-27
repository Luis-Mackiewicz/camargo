"use client";

import CamargoIcon from "@/app/favicon.ico";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export const whatsappLink =
  "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-12 w-full fixed top-0 z-50 border-b border-white/10 bg-black/5 backdrop-blur-md md:h-14">
      <nav className="w-full md:w-4/5 mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/">
          <Image src={CamargoIcon} alt="logo" className="w-8 h-8" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm md:text-base">
          <li className="hover:opacity-40 transition-all duration-500">
            <Link href="/">Início</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-500">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-500">
            <Link href="/servicos">Serviços</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-500">
            <Link href="/agendar">Agendar</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-500">
            <Link href="/videos">Vídeos</Link>
          </li>

          <li>
            <Button
              asChild
              className="bg-linear-to-r from-green-500 to-green-700 rounded-2xl hover:scale-105 transition-transform"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Contato
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-linear-to-t from-blue-700 to-blue-800   backdrop-blur-md flex flex-col items-center gap-6 py-6 text-white text-base font-bold">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link href="/sobre" onClick={() => setIsOpen(false)}>
            Sobre
          </Link>
          <Link href="/servicos" onClick={() => setIsOpen(false)}>
            Serviços
          </Link>
          <Link href="/agendar" onClick={() => setIsOpen(false)}>
            Agendar
          </Link>
          <Link href="/videos" onClick={() => setIsOpen(false)}>
            Vídeos
          </Link>

          <Button
            asChild
            className="bg-linear-to-r from-green-500 to-green-700 rounded-2xl"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Contato
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
