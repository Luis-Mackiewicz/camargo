import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import Image from "next/image";
import CamargoImage from "@/public/camargo_image.jpeg";
import { SobreBackground } from "@/components/background";

export default function Sobre() {
  return (
    <>
      <SobreBackground />
      <main className="relative h-dvh w-full flex items-center justify-center">
        <Card className="h-3/4 w-4/5 flex flex-col items-center bg-blue-950 border-0 shadow-2xl">
          <CardHeader className="w-full text-center md:w-4/5 lg:text-start">
            <CardTitle className="text-white text-xl md:text-4xl">
              Sobre
            </CardTitle>
          </CardHeader>
          <CardContent className="h-4/5 w-4/5 grid grid-cols-1 overflow-y-auto lg:gap-x-8 lg:grid-cols-2 lg:overflow-hidden">
            <div className="hidden items-baseline justify-center lg:flex">
              <Image
                src={CamargoImage}
                alt="Camargo Image"
                className="h-full object-cover border border-white/10 rounded-2xl transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-white gap-y-2 text-center md:text-start lg:gap-y-8 md:p-0">
              <p>
                Na Camargo Advocacia, compreendemos o Direito como um
                instrumento essencial de proteção, garantia e efetivação de
                direitos, voltado à solução de conflitos e à promoção da justiça
                de forma técnica, ética e responsável.
              </p>
              <p>
                Atuamos com seriedade, comprometimento e rigor jurídico na
                defesa dos interesses de nossos clientes, oferecendo atendimento
                personalizado e estratégias jurídicas compatíveis com as
                particularidades de cada caso.
              </p>
              <p>
                Com sólida atuação nas áreas do Direito Previdenciário,
                Trabalhista, Cível e de Família, nosso escritório se dedica à
                prestação de serviços jurídicos com elevado padrão de qualidade,
                pautado na transparência, na confiança e na busca por resultados
                concretos.
              </p>
              <p>
                Na Camargo Advocacia, cada demanda é analisada de forma
                individualizada, com enfoque técnico, planejamento e atuação
                eficiente, sempre com o propósito de entregar soluções seguras,
                eficazes e juridicamente fundamentadas.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
