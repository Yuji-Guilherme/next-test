import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';

import { Header } from '@/patterns/Header';

import './index.css';

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
