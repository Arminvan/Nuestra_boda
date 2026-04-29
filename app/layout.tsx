import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"; // Importamos la fuente elegante
import "./globals.css";

// Configuración de la fuente Playfair Display
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Boda Isabel y Sebastian",
  description: "Invitación interactiva a nuestra boda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" // Cambiado a español
      className={`${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif"> {/* font-serif usa nuestra variable */}
        {children}
      </body>
    </html>
  );
}