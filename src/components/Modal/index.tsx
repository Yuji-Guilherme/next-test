import Image from 'next/image';

import * as S from './style';

const imageSize = { width: 300, height: 180 };

function Modal() {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          style={{
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`
          }}
          src="/example.png"
          alt="example image"
          width={imageSize.width}
          height={imageSize.height}
        />
      </S.ImageWrapper>
      <S.ButtonWrapper>
        <S.ImageCurveTop>
          <Image
            src={'/svg/image-curve.svg'}
            width={32}
            height={19}
            alt="image curve"
          />
        </S.ImageCurveTop>
        <S.ImageCurveLeft>
          <Image
            className="rotate-90"
            src={'/svg/image-curve.svg'}
            width={32}
            height={19}
            alt="image curve"
          />
        </S.ImageCurveLeft>
        <S.Button>
          <Image
            className="-rotate-90 group-hover:scale-110 transition-transform"
            src={'/svg/arrow.svg'}
            width={12}
            height={12}
            alt="arrow"
          />
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export { Modal };
