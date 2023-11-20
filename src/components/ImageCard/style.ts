import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  relative
  group
  cursor-pointer 
`;

const ButtonWrapper = tw.div`
  w-12
  h-12 
  bg-gray-200 
  flex 
  justify-end 
  items-end 
  bottom-0
  right-0 
  rounded-tl-3xl
  absolute 
`;

const Button = tw.button`
  w-10 
  h-10 
  bg-zinc-700 
  flex 
  items-center 
  justify-center 
  text-sm 
  text-gray-50 
  rounded-full
 
  group-hover:scale-105
  group-hover:-rotate-12
  transition-transform
`;

const ImageCurveTop = tw.span`
  top-[-16px] 
  right-0
  absolute 
`;

const ImageCurveLeft = tw.span`
  top-[23px]
  left-[-22px] 
  absolute 
  -scale-x-100 
`;

const imageWrapperClassName = 'rounded-3xl overflow-hidden object-cover';

const arrowClassName = '-rotate-90 group-hover:scale-110 transition-transform';

const curveLeftClassName = 'rotate-90';

const imageSize = { width: 300, height: 180 };

const imageCurveSize = { width: 32, height: 19 };

const arrowImageSize = 12;

export {
  Wrapper,
  ButtonWrapper,
  Button,
  ImageCurveTop,
  ImageCurveLeft,
  imageWrapperClassName,
  arrowClassName,
  curveLeftClassName,
  imageSize,
  imageCurveSize,
  arrowImageSize
};
