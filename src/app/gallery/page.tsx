import { Title } from '@/components/Title';
import { HomeButton } from '@/components/Button';
import { Modal } from '@/components/Modal';

import { MainWithGap } from '../style';
import * as S from './style';

export default function Gallery() {
  return (
    <MainWithGap>
      <Title>Gallery</Title>
      <S.ModalWrapper>
        <Modal />
        <Modal />
        <Modal />
      </S.ModalWrapper>
      <HomeButton />
    </MainWithGap>
  );
}
