import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jardindeleden.com"; // TODO: cambia por el dominio real
const ogImage = "/og.jpg"; // TODO: crea esta imagen en /public/og.jpg (1200x630)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF8F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Floristería Jardín del Edén | Envíos a domicilio",
    template: "%s | Floristería Jardín del Edén",
  },
  description:
    "Floristería online con envío a domicilio. Arreglos florales para cumpleaños, aniversarios, amor, condolencias y ocasiones especiales. Flores frescas y atención personalizada.",
  keywords: [
    "floristería a domicilio",
    "floristería online",
    "arreglos florales",
    "ramos de flores",
    "flores a domicilio",
    "flores para cumpleaños",
    "flores para aniversario",
    "flores para condolencias",
    "bouquets",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Floristería Jardín del Edén | Envíos a domicilio",
    description:
      "Arreglos florales con flores frescas y entrega a domicilio. El detalle perfecto para cada ocasión.",
    siteName: "Floristería Jardín del Edén",
    locale: "es_CO",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Floristería Jardín del Edén - flores a domicilio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floristería Jardín del Edén | Envíos a domicilio",
    description:
      "Flores frescas y arreglos florales para cada ocasión con entrega a domicilio.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
