import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ContactSection from "@/components/footerSection/FooterSection";

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mi Portfolio En Linea",
  description: "Explora los proyectos y la experiencia de Juan Perez, un desarrollador web especializado en Front end.",
  generator: 'Next.js',
  applicationName: 'Portfolio Online',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Portafolio de desarrollador web',
    'Desarrollador web',
    'Programador web',
    'Proyectos de desarrollo web',
    'Trabajos de desarrollador',
    'Experiencia en desarrollo web',
    'Desarrollador freelance',
    'Programador freelance'
  ],
  authors: [{ name: 'Marcos' }],
  creator: 'Aguirre Marcos Julio',
  publisher: 'Aguirre Marcos Julio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <footer className="bg-orange-600 text-white p-4">
          <ContactSection />
        </footer>
      </body>
    </html>
  );
}
