import tw from 'tailwind-styled-components';

const Dialog = tw.dialog`
  w-screen 
  h-screen 
  bg-transparent
  inset-0 
  flex 
  items-center 
  justify-center 
  fixed 
  z-10 
`;

const Button = tw.button`
  w-4 
  h-4 
  bg-transparent 
  top-5 
  right-5 
  flex 
  items-center 
  justify-center 
  absolute

  hover:scale-110 
  transition-transform
`;

const Title = tw.h2`
  text-zinc-700 
  font-bold 
  text-xl 
  mb-4
`;

const Description = tw.p`
  text-zinc-600
  text-base
`;

const Background = tw.span`
  w-screen 
  h-screen 
  bg-gray-800/60
  absolute
  cursor-pointer
`;

const imageWrapperClassName = 'mr-[25%] z-20';

const imageClassName = 'w-[500px] h-[280px] rounded-lg object-cover';

const asideClassName =
  'w-1/4 h-screen bg-slate-50 p-7 rounded-l-xl right-0 absolute z-20';

const imageSize = { width: 500, height: 280 };

const closeIconSize = 12;

export {
  Dialog,
  Button,
  Title,
  Description,
  Background,
  imageWrapperClassName,
  imageClassName,
  asideClassName,
  imageSize,
  closeIconSize
};
