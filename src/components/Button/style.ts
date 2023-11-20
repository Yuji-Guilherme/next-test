import tw from 'tailwind-styled-components';

type $Dark = boolean;

type StyledButtonProps = { $dark: $Dark };

const Button = tw.button<StyledButtonProps>`
  ${(props) => (props.$dark ? 'bg-zinc-700' : 'bg-gray-300')}
  ${(props) => (props.$dark ? 'text-slate-50' : 'text-zinc-600')}
  ${(props) => (props.$dark ? 'hover:bg-zinc-600' : 'hover:bg-zinc-700')}
  ${(props) => (props.$dark ? '' : 'hover:text-zinc-200')}

  group
  min-h-[36px]
  min-w-[80px]
  text-sm
  font-medium
  py-1
  px-3
  flex
  items-center 
  justify-center 
  gap-2
  rounded-lg

  transition-colors
`;

const iconColor = ($dark: $Dark) => {
  return $dark
    ? 'stroke-slate-50'
    : 'stroke-zinc-500 group-hover:stroke-zinc-300 group-hover:fill-zinc-300 transition-colors';
};

export { Button, iconColor };
