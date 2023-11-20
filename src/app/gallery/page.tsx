import { Modal } from '@/components/Modal';
import { Title } from '@/components/Title';
import { ImageCard } from '@/components/ImageCard';
import { HomeButton } from '@/components/Button';

import { MainWithGap } from '../style';
import * as S from './style';

export default function Gallery() {
  return (
    <>
      <Modal />
      <MainWithGap>
        <Title>Gallery</Title>
        <S.ImageCardWrapper>
          <ImageCard href={{ query: { image: 1 } }} imageId={1} />
          <ImageCard href={{ query: { image: 2 } }} imageId={2} />
          <ImageCard href={{ query: { image: 3 } }} imageId={3} />
        </S.ImageCardWrapper>
        <HomeButton />
      </MainWithGap>
    </>
  );
}
