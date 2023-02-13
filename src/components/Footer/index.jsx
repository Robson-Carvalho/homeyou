import { Container } from "./styles";

import logoHomeYou from "../../assets/home.svg";

export const Footer = () => {
  return (
    <Container>
      <div>
        <img src={logoHomeYou} alt="" />

        <div>
          <ul>
            <h3>Produtos</h3>
            <li>
              <a href="#">Mobilia</a>
            </li>
            <li>
              <a href="#">Segurança</a>
            </li>
            <li>
              <a href="#">Design Interior </a>
            </li>
          </ul>

          <ul>
            <h3>Mais Informações</h3>
            <li>
              <a href="#">Contrato</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Termos e Condições</a>
            </li>
          </ul>
          <ul>
            <h3>Redes Sociais </h3>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
