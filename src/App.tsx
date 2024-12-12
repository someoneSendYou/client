import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/global";
import {theme} from './style/theme'
import Layout from './Layout';
import Category from "./pages/Category";
import LetterChoice from "./pages/LetterChoice";

function App() {
  const routeList = [
    {
      path:"/",
      element : <Category />
    },
    {
      path:"/choice",
      element: <LetterChoice />
    }
  ]

  const router = createBrowserRouter(
    routeList.map((item) => {
      return {
        ...item,
        element: <Layout>{item.element}</Layout>,
      };
    })
  );
  
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router}/>
  </ThemeProvider>
  );
}

export default App;
