import tw from 'tailwind-styled-components';

const Header = tw.header`
  w-full 
  h-16 
  bg-slate-50 
  px-12 
  flex 
  items-center 
  justify-between 
  rounded-b-2xl
  fixed 
`;

const Nav = tw.nav`
  flex 
  items-center 
  justify-around 
  gap-5
`;

export { Header, Nav };
