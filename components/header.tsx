import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 w-full flex items-center justify-center fixed top-0 border-b border-white/10 z-50 md:h-14">
      <nav className="md:w-4/5">
        <ul className="flex gap-4 text-white text-sm md:text-base md:justify-end md:gap-8">
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
        </ul>
      </nav>
    </header>
  );
}
