import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camargo Advocacia | Janiópolis - PR",

  description:
    "Camargo Advocacia é um escritório jurídico em Janiópolis - PR, especializado em direito previdenciário, da família, consumidor, público e registro de marcas. Atendimento ético e personalizado.",

  keywords: [
    "Camargo Advocacia",
    "advogado Janiópolis",
    "direito previdenciário",
    "direito da família",
    "aposentadoria",
    "INSS",
    "consultoria jurídica",
    "direito consumidor",
    "direito público",
    "mediação",
    "registro de marcas",
  ],

  authors: [{ name: "Andŕe Vinícius Dos Santos Camargo" }],

  openGraph: {
    title: "Camargo Advocacia | Janiópolis - PR",

    description:
      "Especialistas em Direito Previdenciário, Família, Consumidor, Público e Registro de Marcas. Escritório localizado em Janiópolis-PR.",

    url: "https://www.camargoadvocacia.com.br",

    siteName: "Camargo Advocacia",

    type: "website",

    images: [
      {
        url: "/banner.svg",
        width: 1200,
        height: 630,
        alt: "Camargo Advocacia",
      },
    ],

    locale: "pt_BR",
  },

  twitter: {
    card: "summary_large_image",

    title: "Camargo Advocacia | Janiópolis - PR",

    description:
      "Atendimento jurídico humanizado e eficiente. Especializados em causas previdenciárias, familiares, consumidor e mais.",

    images: ["/banner.jvg"],
  },

  metadataBase: new URL("https://www.camargoadvocacia.com.br"),

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
