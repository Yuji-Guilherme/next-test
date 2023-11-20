import tw from 'tailwind-styled-components';

const Main = tw.main`
  flex 
  items-center 
  justify-center 
  h-full
`;

const MainWithGap = tw(Main)`
  flex-col 
  gap-9
`;

export { Main, MainWithGap };
