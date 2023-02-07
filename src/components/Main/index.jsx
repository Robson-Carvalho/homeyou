import {
  Container,
  Home,
  ContentHome,
  InfoHome,
  Gallery,
  Contact,
} from "./styles";

import imgHome from "../../assets/img1.png";

export const Main = () => {
  return (
    <Container>
      <Home>
        <ContentHome>
          <InfoHome>
            <h2>
              Ajudar você a encontrar <br /> o melhor conforto, <br /> é nossa
              prioridade.
            </h2>
            <span>
              Encontre uma variedade de propriedades que <br /> combinam com
              você. Esqueça todas as dificuldades <br /> em encontrar uma
              residência
            </span>

            <div>
              <a href="#contact">Entre em contato</a>
              <a href="#">Mais sobre nós</a>
            </div>
          </InfoHome>
          <img src={imgHome} alt="" />
        </ContentHome>
      </Home>
    </Container>
  );
};
