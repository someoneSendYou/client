import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from './Layout';
import Home from './Home';
import { GlobalStyle } from "./style/global";
import {theme} from './style/theme'

function App() {
  const routeList = [
    {
      path:"/",
      element : <Home />
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
