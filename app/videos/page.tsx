import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import Image from "next/image";
import CoomingSoonImage from "@/public/coming-soon.svg";
import { VideosBackground } from "@/components/background";

export default function videos() {
  return (
    <>
      <VideosBackground />
      <main className="relative h-dvh w-full flex items-center justify-center">
        <Card className="h-3/4 w-4/5 flex flex-col items-center bg-blue-950 border-0 shadow-2xl text-white">
          <CardHeader className="w-full text-center md:w-4/5 lg:text-start">
            <CardTitle className="text-white text-xl md:text-4xl">
              Videos
            </CardTitle>
          </CardHeader>
          <CardContent className="w-4/5 h-4/5 flex flex-col gap-4 md:gap-8 items-center justify-center">
            <Image
              src={CoomingSoonImage}
              alt="comming soon"
              className="w-1/3"
            />
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start">
              Seção de vídeos em breve!
            </h1>
            <p>
              Estamos prearando uma nova seção com videos exclusívos sobre
              direito.
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
