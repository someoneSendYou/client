import styled from "styled-components";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutStyle>
      <Header />
        {children}
      </LayoutStyle>
    </>
  );
}

const LayoutStyle = styled.main`
  width : 100%;
  margin : 0 auto;
  max-width : ${({theme})=> theme.layout.width.default};
  background-color: white;
  min-height : 100vh;
`;

export default Layout;