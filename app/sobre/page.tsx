import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import LogoCamargoAdvocacia from "@/public/logo.svg";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
        <div className="absolute inset-0 bg-[url('/bg-images/background-about.svg')] bg-cover bg-center opacity-40" />
      </div>

      <Card className="h-3/4 w-4/5 flex flex-col items-center justify-center bg-blue-950 border-0">
        <CardHeader className=" w-full text-center">
          <CardTitle className=" text-white text-xl ">Sobre</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-8 lg:gap-18">
          <div className="w-2/5 lg:max-w-1/5">
            <Image src={LogoCamargoAdvocacia} alt="Icone camargo advocacia" />
          </div>
          <p className=" text-center text-white/80">
            Na Camargo Advocacia , acreditamos que o direito é mais do que uma
            profissão: é uma ferramenta poderosa para transformar vidas,
            proteger direitos e promover justiça. Fundada com o compromisso de
            oferecer soluções jurídicas personalizadas e eficazes, nossa equipe
            está preparada para atender às mais diversas demandas legais com
            excelência e transparência.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
