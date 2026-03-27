"use client";

import { ServicosBackground } from "@/components/background";
import ServiceModal from "@/components/modal";
import { areasOfSpecialization } from "@/constants/areas";
import Image from "next/image";
import { useState } from "react";

type Area = (typeof areasOfSpecialization)[0];

export default function Servicos() {
  const [selected, setSelected] = useState<Area | null>(null);

  return (
    <>
      <main className="h-dvh w-full flex items-center justify-center overflow-hidden">
        <ServicosBackground />
        <div className="w-4/5 px-4 text-white flex flex-col gap-16">
          <section className="w-full max-w-3xl">
            <h1 className="text-xl md:text-4xl font-bold">Serviços</h1>

            <p className="text-gray-300 text-base leading-relaxed mt-4">
              Atuamos na defesa dos seus direitos com atendimento ágil, análise
              estratégica e atuação precisa em cada etapa do processo. Nosso
              compromisso é buscar a melhor solução jurídica para o seu caso.
            </p>
          </section>

          <section className="border border-white/10 rounded-2xl w-full grid grid-cols-2 p-1 sm:grid-cols-3 gap-12 lg:p-30">
            {areasOfSpecialization.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelected(area)}
                className="group flex flex-col items-center text-center gap-4 cursor-pointer"
              >
                <div
                  className="
                  relative
                  p-5
                  rounded-2xl
                  bg-linear-to-br from-blue-600 to-blue-800
                  shadow-lg
                  transition-all
                  group-hover:scale-110
                  group-hover:shadow-blue-900/50
                "
                >
                  <Image
                    src={area.icone}
                    alt={area.alt}
                    width={28}
                    height={28}
                  />

                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                </div>

                <span className="text-sm md:text-base font-medium text-gray-100 group-hover:text-white transition-all">
                  {area.nome}
                </span>
              </div>
            ))}
          </section>
        </div>

        <ServiceModal area={selected} onClose={() => setSelected(null)} />
      </main>
    </>
  );
}
