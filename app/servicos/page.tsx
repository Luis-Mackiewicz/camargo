import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function Servicos() {
  return (
    <main className="relative h-dvh w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
        <div className="absolute inset-0 bg-[url('/bg-images/background-services.svg')] bg-cover bg-center opacity-40" />
      </div>

      <Card className="h-3/4 w-4/5  bg-blue-950 border-0">
        <CardHeader className=" w-full text-center lg:text-start">
          <CardTitle className="text-white text-xl">Sobre</CardTitle>
        </CardHeader>
      </Card>
      <CardContent className=""></CardContent>
    </main>
  );
}
