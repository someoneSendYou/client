import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from './Layout';
import Home from './Home';
import { GlobalStyle } from "./style/global";
import {theme} from './style/theme'
import WriteLetter from "./pages/WriteLetter";
import ReceivedLetter from "./pages/ReceivedLetter";
import SendLetter from "./pages/SendLetter";
import ShareLetter from "./pages/ShareLetter";
import ShareKakao from "./components/share-letter/ShareKakao";
import ReceivedLetterDetail from "./pages/ReceivedLetterDetail";

function App() {
  const routeList = [
    {
      path:"/",
      element : <Home />
    },
    {
      path:"/letter",
      element : <WriteLetter />
    },
    {
      path:"/received-letter",
      element: <ReceivedLetter />
    },
    {
      path:"/share-letter",
      element: <ShareLetter />
    },
    {
      path: '/letter-detail',
      element: <ReceivedLetterDetail />
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
