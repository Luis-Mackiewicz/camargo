import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 w-full fixed top-0 border-b border-white/10">
      <nav className="">
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/sobre">sobre</Link>
          </li>
          <li>
            <Link href="/servicos">serviços</Link>
          </li>
          <li>
            <Link href="/agendar">agendar</Link>
          </li>
          <li>
            <Link href="/videos">vídeos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
