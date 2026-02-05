import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mondia = localFont({
  src: [
    { path: "../public/fonts/Mondia-ExtraBlack.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/Mondia-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-mondia",
});

const montserrat = localFont({
  src: [
    { path: "../public/fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "San Valentín 2026 | Faranda Hotels España",
  description:
    "Ofertas de San Valentín en Faranda Hotels España. Elige tu hotel y reserva contactando directamente con el establecimiento.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${mondia.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
