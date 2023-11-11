import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  cursor-pointer 
  relative
  group
`;

const ImageWrapper = tw.div`
  rounded-3xl
  overflow-hidden 
  object-cover
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

export {
  Wrapper,
  ImageWrapper,
  ButtonWrapper,
  Button,
  ImageCurveTop,
  ImageCurveLeft
};
