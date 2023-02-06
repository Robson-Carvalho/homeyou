import { useState } from "react";

import {
  Container,
  Nav,
  Logo,
  MobileButton,
  Menu,
  Interactions,
} from "./styles";

import logoHomeYou from "../../assets/home.svg";
import iconHeart from "../../assets/heart.svg";
import iconUser from "../../assets/user.svg";
import iconSearch from "../../assets/search.svg";

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logoHomeYou} alt="" />
          <h1>HOMEYOU</h1>
        </Logo>

        <Menu role="menu">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#gallery">Galeria</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </Menu>

        <Interactions>
          <img src={iconUser} alt="" />
          <img src={iconHeart} alt="" />
          <img src={iconSearch} alt="" />
        </Interactions>

        <MobileButton
          id="btn-mobile"
          aria-label="Abrir menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span id="hamburger"></span>
        </MobileButton>
      </Nav>
    </Container>
  );
};
