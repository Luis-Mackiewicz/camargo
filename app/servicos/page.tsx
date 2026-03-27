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
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-red-500 w-4/5 flex flex-col items-center justify-center text-white">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Áreas de atuação
            </h1>

            <p className="text-gray-300 text-sm">
              Excelência jurídica e compromisso com o seu direito. Oferecemos
              soluções completas e suporte especializado para cada necessidade
              legal.
            </p>
          </div>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {areasOfSpecialization.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelected(area)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="bg-yellow-600/90 group-hover:bg-yellow-500 transition-all p-4 rounded-xl shadow-lg">
                  <Image
                    src={area.icone}
                    alt={area.alt}
                    width={24}
                    height={24}
                  />
                </div>

                <span className="text-white text-sm md:text-base font-medium text-center">
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
