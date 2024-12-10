import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
}

const LayoutStyle = styled.main`
    color : ${({theme})=> theme.colors.text};
`;

export default Layout;