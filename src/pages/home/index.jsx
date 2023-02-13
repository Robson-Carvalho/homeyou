import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
