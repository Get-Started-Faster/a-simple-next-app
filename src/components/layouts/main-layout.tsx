interface Props {
  children: JSX.Element;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
};
