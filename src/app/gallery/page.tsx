import { Modal } from '@/components/Modal';
import { Title } from '@/components/Title';
import { ImageCard } from '@/components/ImageCard';
import { HomeButton } from '@/components/Button';

import Link from 'next/link';

import { MainWithGap } from '../style';
import * as S from './style';

export default function Gallery() {
  return (
    <>
      <Modal />
      <MainWithGap>
        <Title>Gallery</Title>
        <S.ImageCardWrapper>
          <Link href={{ query: { image: 1 } }}>
            <ImageCard imageId={1} />
          </Link>
          <Link href={{ query: { image: 2 } }}>
            <ImageCard imageId={2} />
          </Link>
          <Link href={{ query: { image: 3 } }}>
            <ImageCard imageId={3} />
          </Link>
        </S.ImageCardWrapper>
        <HomeButton />
      </MainWithGap>
    </>
  );
}
