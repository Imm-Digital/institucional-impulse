import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Grupo Impulse",
  description: "Site institucional Grupo Impulse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${inter.className}, ${poppins.className}, ${josefin.className}, ${montserrat.className}`}>{children}</body>
    </html>
  );
}
