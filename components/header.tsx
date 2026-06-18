"use client";

import CamargoIcon from "@/public/logo-icon.webp";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";

export const whatsappLink =
  "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/agendar", label: "Agendar" },
  { href: "/videos", label: "Vídeos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="h-12 w-full fixed top-0 z-50 border-b border-white/10 bg-black/5 backdrop-blur-md md:h-14">
      <nav className="w-full md:w-4/5 mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/">
          <Image
            src={CamargoIcon}
            alt="Camargo Advocacia"
            className="w-8 h-8 transition-all duration-300 hover:scale-110"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-white text-sm md:text-base">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                pathname === link.href
                  ? "text-blue-300 font-semibold"
                  : "hover:opacity-40"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

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
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-blue-950 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-white text-base font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={
                pathname === link.href ? "text-blue-300" : undefined
              }
            >
              {link.label}
            </Link>
          ))}

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
              <MessageCircle className="w-5 h-5" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
