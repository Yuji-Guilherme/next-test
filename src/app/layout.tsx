import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';
import './index.css';

import { Header } from '@/patterns/Header';
import { PageTransition } from '@/patterns/PageTransition';

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
        <PageTransition>
          <Header />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
