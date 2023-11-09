import Image from 'next/image';

import * as S from './style';

const imageSize = { width: 300, height: 180 };

function Modal() {
  return (
    <div className="relative">
      <S.Wrapper>
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
      </S.Wrapper>
      <div className=" w-12 h-12 flex justify-end items-end bg-gray-200 absolute bottom-0 right-0 rounded-tl-3xl">
        <span className="absolute top-[-16px] right-0">
          <Image
            src={'/svg/image-curve.svg'}
            width={32}
            height={19}
            alt="image curve"
          />
        </span>
        <span className="absolute -scale-x-100 left-[-22px] top-[23px]">
          <Image
            className="rotate-90"
            src={'/svg/image-curve.svg'}
            width={32}
            height={19}
            alt="image curve"
          />
        </span>
        <button className="w-10 h-10 bg-black text-gray-50 text-sm rounded-full">
          Op
        </button>
      </div>
    </div>
  );
}

export { Modal };
