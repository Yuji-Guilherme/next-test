import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';

import * as S from './style';

function Header() {
  return (
    <S.Header>
      <Logo />
      <S.Nav>
        <Button href={'/gallery'}>Gallery</Button>
        <Button href={'/1'}>Page 1</Button>
        <Button href={'https://github.com/Yuji-Guilherme/next-test'} dark>
          Github
        </Button>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
