import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dosis = localFont({
  src: "./fonts/Dosis.ttf",
  variable: "--font-dosis",
  weight: "300 500 700",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Serviço fora de escopo - Linx Degust",
  description: "Solicitação de serviço fora de escopo Linx Degust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dosis.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
