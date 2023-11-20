import Link from 'next/link';

import * as S from './style';

function Logo() {
  return (
    <Link href="/">
      <S.Logo>LOGO</S.Logo>
    </Link>
  );
}

export { Logo };
