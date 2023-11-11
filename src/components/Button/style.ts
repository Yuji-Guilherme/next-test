import tw from 'tailwind-styled-components';
import type { ButtonProps } from '.';

type StyledButtonProps = Pick<ButtonProps, 'dark'>;

const Button = tw.button<StyledButtonProps>`
  ${(props) => (props.dark ? 'bg-zinc-700' : 'bg-gray-300')}
  ${(props) => (props.dark ? 'text-slate-50' : 'text-zinc-600')}
  ${(props) => (props.dark ? 'hover:bg-zinc-600' : 'hover:bg-zinc-700')}
  ${(props) => (props.dark ? '' : 'hover:text-zinc-200')}

  group
  text-sm
  font-medium
  flex
  items-center 
  justify-center 
  gap-2
  py-1
  px-3
  min-h-[36px]
  min-w-[80px]
  rounded-lg
  transition-colors
`;

const iconColor = (dark: boolean) => {
  return dark
    ? 'stroke-slate-50'
    : 'stroke-zinc-500 group-hover:stroke-zinc-300 transition-colors';
};

export { Button, iconColor };
