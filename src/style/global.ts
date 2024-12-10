import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;