import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function Sobre() {
  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
        <div className="absolute inset-0 bg-[url('/background/background-about.svg')] bg-cover bg-center opacity-40" />
      </div>

      <Card className="h-3/4 w-4/5 flex flex-col items-center bg-blue-950 border-0 shadow-2xl">
        <CardHeader className="w-full text-center md:w-4/5 lg:text-start">
          <CardTitle className="text-white text-xl md:text-4xl">
            Sobre
          </CardTitle>
        </CardHeader>
        <CardContent className="w-4/5 h-4/5 flex flex-col justify-center items-center gap-8 lg:gap-18">
          <div className="flex flex-col text-white overflow-y-auto gap-y-4 text-center md:text-start md:gap-y-8">
            <p>
              Na Camargo Advocacia, compreendemos o Direito como um instrumento
              essencial de proteção, garantia e efetivação de direitos, voltado
              à solução de conflitos e à promoção da justiça de forma técnica,
              ética e responsável.
            </p>
            <p>
              Atuamos com seriedade, comprometimento e rigor jurídico na defesa
              dos interesses de nossos clientes, oferecendo atendimento
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
  );
}
