import type { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

import * as S from './style';

import { Icon, type Icons } from './Icon';

export type ButtonProps = {
  children: React.ReactNode;
  href: Url;
  dark?: boolean;
  icon?: Icons;
};

const font = Montserrat({ subsets: ['latin'] });

function Button({ children, href, icon, dark = false }: ButtonProps) {
  const isExternalLink = href.toString().startsWith('http');
  const iconColor = S.iconColor(dark);

  return (
    <Link
      className={font.className}
      href={href}
      target={isExternalLink ? `_blank` : ''}
    >
      <S.Button dark={dark}>
        {icon && (
          <Icon
            style={{ width: '15px', height: '14px' }}
            className={iconColor}
            iconName={icon}
          />
        )}
        {children}
      </S.Button>
    </Link>
  );
}

function HomeButton() {
  return (
    <Button href={'/'} icon="home" dark>
      Go to Home
    </Button>
  );
}

export { Button, HomeButton };
