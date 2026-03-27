"use client";

import Image from "next/image";

type Area = {
  id: number;
  icone: string;
  nome: string;
  alt: string;
  description: string;
};

type ServiceModalProps = {
  area: Area | null;
  onClose: () => void;
};

export default function ServiceModal({ area, onClose }: ServiceModalProps) {
  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-4/5 max-w-md flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={area.icone}
          alt={area.alt}
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <h2 className="text-xl font-bold text-blue-900">{area.nome}</h2>
        <p className="text-center text-gray-700">{area.description}</p>
        <button
          onClick={onClose}
          className="p-2.5 bg-linear-to-r from-green-500 to-green-700 text-white font-bold rounded-xl cursor-pointer hover:scale-105 transition-transform"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
