import type { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

import * as S from './style';

export type ButtonProps = {
  children: React.ReactNode;
  href: Url;
  dark?: boolean;
};

const font = Montserrat({ subsets: ['latin'] });

function Button({ children, href, dark = false }: ButtonProps) {
  const isExternalLink = href.toString().startsWith('http');

  return (
    <Link
      className={font.className}
      href={href}
      target={isExternalLink ? `_blank` : ''}
    >
      <S.Button dark={dark}>{children}</S.Button>
    </Link>
  );
}

export { Button };
