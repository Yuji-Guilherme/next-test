'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import * as S from './style';

type ImageCardProps = {
  imageId?: number;
};

function ImageCard({ imageId }: ImageCardProps) {
  return (
    <S.Wrapper>
      <motion.div
        className={S.imageWrapperClassName}
        layoutId={`image-${imageId}`}
        transition={{
          duration: 0.2
        }}
      >
        <Image
          src={'/example.png'}
          style={{
            width: S.imageSize.width,
            height: S.imageSize.height
          }}
          width={S.imageSize.width}
          height={S.imageSize.height}
          alt="example image"
        />
      </motion.div>
      <S.ButtonWrapper>
        <S.ImageCurveTop>
          <Image
            src={'/svg/image-curve.svg'}
            style={{
              width: S.imageCurveSize.width,
              height: S.imageCurveSize.height
            }}
            width={S.imageCurveSize.width}
            height={S.imageCurveSize.height}
            alt="image curve"
          />
        </S.ImageCurveTop>
        <S.ImageCurveLeft>
          <Image
            src={'/svg/image-curve.svg'}
            className={S.curveLeftClassName}
            style={{
              width: S.imageCurveSize.width,
              height: S.imageCurveSize.height
            }}
            width={S.imageCurveSize.width}
            height={S.imageCurveSize.height}
            alt="image curve"
          />
        </S.ImageCurveLeft>
        <S.Button>
          <Image
            className={S.arrowClassName}
            src={'/svg/arrow.svg'}
            style={{
              width: S.arrowImageSize,
              height: S.arrowImageSize
            }}
            width={S.arrowImageSize}
            height={S.arrowImageSize}
            alt="arrow"
          />
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export { ImageCard };
