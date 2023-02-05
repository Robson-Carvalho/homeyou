import { Home } from "./pages/home";

import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/global.style";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    min-height: 100vh;

  };
  *, body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
