"use client";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
export const whatsappLink =
  "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

export default function Header() {
  const router = useRouter();
  return (
    <header className="h-12 w-full flex items-center justify-center fixed top-0 border-b border-white/10 z-50 md:h-14">
      <nav className=" md:w-4/5">
        <div className="md:hidden w-full flex gap-2">
          <select
            name="menu"
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="bg-white rounded-2xl text-center text-sm"
          >
            <div className="rounded-2xl">
              <option value="/">Início</option>
              <option value="sobre">Sobre</option>
              <option value="servicos">Serviços</option>
              <option value="agendar">Agendar</option>
              <option value="videos">Vídeos</option>
            </div>
          </select>
          <Button
            asChild
            className="bg-linear-to-r from-green-500 to-green-700 rounded-xl hover:scale-105 transition-transform"
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
        </div>

        <ul className="hidden md:flex justify-center items-center gap-4 text-white text-sm md:text-base md:justify-end md:gap-8">
          <li className="hover:opacity-40 transition-all duration-700">
            <Link href="/">Início</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-700">
            <Link href="/sobre">sobre</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-700">
            <Link href="/servicos">serviços</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-700">
            <Link href="/agendar">agendar</Link>
          </li>
          <li className="hover:opacity-40 transition-all duration-700">
            <Link href="/videos">vídeos</Link>
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
      </nav>
    </header>
  );
}
