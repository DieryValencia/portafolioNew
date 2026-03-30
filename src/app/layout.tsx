import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Diery Valencia — Full Stack Developer',
  description: 'Portafolio profesional de Diery Valencia. Ingeniero de Software y Desarrollador Full Stack especializado en crear experiencias digitales innovadoras.',
  openGraph: {
    title: 'Diery Valencia — Full Stack Developer',
    description: 'Portafolio profesional con proyectos en React, Node.js, TypeScript y más.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
