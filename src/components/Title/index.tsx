import * as S from './style';

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
}

export { Title };
