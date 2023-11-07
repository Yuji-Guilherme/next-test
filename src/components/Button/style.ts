import tw from 'tailwind-styled-components';
import type { ButtonProps } from '.';

type StyledButtonProps = Pick<ButtonProps, 'dark'>;

const Button = tw.button<StyledButtonProps>`
  ${(props) => (props.dark ? 'bg-zinc-700' : 'bg-gray-300')}
  ${(props) => (props.dark ? 'text-slate-50' : 'text-zinc-600')}
  ${(props) => (props.dark ? 'hover:bg-zinc-600' : 'hover:bg-zinc-200')}
  ${(props) => (props.dark ? '' : 'hover:text-zinc-400')}

  text-sm
  flex
  items-center 
  justify-center 
  py-1
  min-h-[32px]
  w-20 
  rounded-lg
  transition-colors
`;

export { Button };
