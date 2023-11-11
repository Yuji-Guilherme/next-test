import { HomeButton } from '@/components/Button';
import { Title } from '@/components/Title';

import * as S from './style';

export default function NotFound() {
  return (
    <>
      <S.MainWithGap>
        <Title>{`404, Sorry, there's nothing here`}</Title>
        <HomeButton />
      </S.MainWithGap>
    </>
  );
}
