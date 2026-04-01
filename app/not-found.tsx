import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-dvh w-full bg-black">
      <h2 className="text-4xl text-white font-bold">404</h2>
      <p className="text-xl text-white">Página não encontrada!</p>
      <Link
        href="/"
        className="bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-2 hover:scale-105 md:w-3xs text-center"
      >
        Voltar
      </Link>
    </div>
  );
}
