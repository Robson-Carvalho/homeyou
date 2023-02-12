import {
  Container,
  Home,
  ContentHome,
  InfoHome,
  Design,
  ContentDesign,
  InfoDesign,
  Gallery,
  Contact,
} from "./styles";

import imgHome from "../../assets/img1.png";
import imgDesign from "../../assets/img2.png";

import imgGallery1 from "../../assets/img3.png";
import imgGallery2 from "../../assets/img4.png";
import imgGallery3 from "../../assets/img5.png";

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
      <Design>
        <ContentDesign>
          <p>
            <img src={imgDesign} alt="" />
          </p>
          <InfoDesign>
            <div>
              <h2>Design Minimalista</h2>
              <span>
                Móveis apenas essenciais e com design moderno, além de
                revestimentos bonitos e em cores neutras para manter a casa
                sempre com um estilo clean e suave.
              </span>
            </div>
            <a href="#">Quero saber mais sobre os designs</a>
          </InfoDesign>
        </ContentDesign>
      </Design>
      <Gallery>
        <h2>Galeria</h2>
        <span>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </span>
        <div>
          <img src={imgGallery1} alt="" />
          <img src={imgGallery2} alt="" />
          <img src={imgGallery3} alt="" />
        </div>
      </Gallery>
    </Container>
  );
};
