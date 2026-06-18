"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";

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
  return (
    <Dialog open={!!area} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex flex-col items-center gap-4 max-w-md rounded-2xl">
        {area && (
          <>
            <div className="p-4 rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 shadow-lg">
              <Image
                src={area.icone}
                alt={area.alt}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-blue-900 text-center">
                {area.nome}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-center text-gray-700">
              {area.description}
            </DialogDescription>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
