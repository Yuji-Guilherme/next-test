import { Bitter } from 'next/font/google';
import type { Metadata } from 'next';

import './index.css';

import { Header } from '@/patterns/Header';

const font = Bitter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-Test',
  description: 'next test'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
