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
      <ServicosBackground />
      <main className="min-h-dvh w-full flex items-center justify-center">
        <div className="max-w-6xl w-full text-white flex flex-col gap-16">
          <section className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Áreas de atuação
            </h1>

            <p className="text-gray-300 text-base leading-relaxed">
              Excelência jurídica e compromisso com o seu direito. Atuamos com
              estratégia, precisão e foco em resultados para proteger o que é
              importante para você.
            </p>
          </section>

          <section className="grid grid-cols-2 sm:grid-cols-3 gap-24 md:p-8">
            {areasOfSpecialization.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelected(area)}
                className="group flex flex-col items-center text-center gap-4 cursor-pointer transition-all"
              >
                <div
                  className="
                  relative
                  p-5
                  rounded-2xl
                  bg-linear-to-br from-blue-600 to-blue-800
                  shadow-lg
                  group-hover:scale-110
                  group-hover:shadow-blue-900/50
                  transition-all
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
