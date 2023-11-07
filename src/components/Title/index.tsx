type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <h1 className="text-5xl text-zinc-700 font-bold">{children}</h1>;
}

export { Title };
