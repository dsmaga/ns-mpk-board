import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tablica MPK',
  description: 'Tablica MPK Nowy Sącz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-6 text-sm md:text-base">
          {children}
        </main>
      </body>
    </html>
  );
}
