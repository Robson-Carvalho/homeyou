import {
  Container,
  Home,
  ContentHome,
  InfoHome,
  Design,
  ContentDesign,
  InfoDesign,
  Gallery,
  Budget,
  Footer,
} from "./styles";

import logoHomeYou from "../../assets/home.svg";

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
      <Budget>
        <h2>Orçamento</h2>
        <span>
          Interessado em entrar em contato com um de nossos profissionais?
        </span>
        <a href="#">Entre em contato</a>
      </Budget>
      <Footer>
        <div>
          <img src={logoHomeYou} alt="" />

          <div>
            <ul>
              <h3>Produtos</h3>
              <li>
                <a href="">Mobilia</a>
              </li>
              <li>
                <a href="">Segurança</a>
              </li>
              <li>
                <a href="">Design Interior </a>
              </li>
            </ul>

            <ul>
              <h3>Mais Informações</h3>
              <li>
                <a href="">Contrato</a>
              </li>
              <li>
                <a href="">Sobre nós</a>
              </li>
              <li>
                <a href="">Termos e Condições</a>
              </li>
            </ul>
            <ul>
              <h3>Redes Sociais </h3>
              <li>
                <a href="">Pinterest</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram </a>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </Container>
  );
};
