import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ResizeScreenContextProvider } from "@/context/resizeScreen";
import GoogleTagManager from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['700', '500', '600', '400', '800', '900'],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
  weight: ['500', '600', '400', '700', '300'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500', '600', '400', '700', '300'],
})

export const metadata: Metadata = {
  title: "Grupo Impulse - Conquiste sua renda através da internet!",
  description: "A Impulse é uma plataforma de treinamento de profissões digitais para renda extra! Capacitamos pessoas para conseguirem retorno financeiro com a internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={`${inter.className}, ${poppins.className}, ${josefin.className}, ${montserrat.className}`}>
        <GoogleTagManager gtmId={'GTM-WCVRKTHV'} />
        <ResizeScreenContextProvider>
          {children}
        </ResizeScreenContextProvider>
      </body>
    </html>
  );
}
