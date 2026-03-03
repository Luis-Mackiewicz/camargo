import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="">Início</Link>
        </li>
        <li>
          <Link href="">sobre</Link>
        </li>
        <li>
          <Link href="">serviços</Link>
        </li>
        <li>
          <Link href="">agendar</Link>
        </li>
        <li>
          <Link href="">vídeos</Link>
        </li>
      </ul>
    </nav>
  );
}
