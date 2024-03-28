import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { ThemeModeScript } from "flowbite-react";

const montserrat = Inter({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Felippe",
  description: "personal portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ThemeModeScript />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
