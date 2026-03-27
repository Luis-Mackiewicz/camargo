"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import ServiceModal from "@/components/modal";
import { areasOfSpecialization } from "@/constants/areas";
import Image from "next/image";
import { useState } from "react";

type Area = (typeof areasOfSpecialization)[0];

export default function Servicos() {
  const [selected, setSelected] = useState<Area | null>(null);

  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
        <div className="absolute inset-0 bg-[url('/background/background-services.svg')] bg-cover bg-center opacity-40" />
      </div>

      <Card className="h-3/4 w-4/5 flex flex-col items-center bg-blue-950 border-0 shadow-2xl">
        <CardHeader className="w-full text-center md:w-4/5 lg:text-start">
          <CardTitle className="text-white text-xl md:text-4xl">
            Serviços
          </CardTitle>
        </CardHeader>
        <CardContent className="w-4/5 h-4/5 grid grid-cols-2 gap-1 p-2 md:grid-cols-3 overflow-visible md:gap-4">
          {areasOfSpecialization.map((area) => (
            <article
              key={area.id}
              onClick={() => setSelected(area)}
              className="bg-white flex flex-col items-center text-center rounded-xl shadow-2xl transition-all cursor-pointer hover:scale-105 p-4 gap-y-8 md:p-16"
            >
              <Image
                src={area.icone}
                alt={area.alt}
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {area.nome}
            </article>
          ))}
        </CardContent>
      </Card>

      <ServiceModal area={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
