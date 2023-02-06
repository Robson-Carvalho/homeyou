import { useState } from "react";

import { Container, Nav, Logo, MobileButton, Menu } from "./styles";

import logoHomeYou from "../../assets/home.svg";
import iconHeart from "../../assets/heart.svg";
import iconUser from "../../assets/user.svg";
import iconSearch from "../../assets/search.svg";

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleClickInMobileButton = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logoHomeYou} alt="" />
          <h1>HOMEYOU</h1>
        </Logo>

        <Menu role="menu" menuIsVisible={menuIsVisible}>
          <li onClick={handleClickInMobileButton}>
            <a href="#home">Inicio</a>
          </li>
          <li onClick={handleClickInMobileButton}>
            <a href="#gallery">Galeria</a>
          </li>
          <li onClick={handleClickInMobileButton}>
            <a href="#contact">Contato</a>
          </li>
          <li onClick={handleClickInMobileButton}>
            <img src={iconUser} alt="" />
          </li>
          <li onClick={handleClickInMobileButton}>
            <img src={iconHeart} alt="" />
          </li>
          <li onClick={handleClickInMobileButton}>
            <img src={iconSearch} alt="" />
          </li>
        </Menu>

        <MobileButton
          id="btn-mobile"
          aria-label="Abrir menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          menuIsVisible={menuIsVisible}
          onClick={handleClickInMobileButton}
        >
          <span></span>
        </MobileButton>
      </Nav>
    </Container>
  );
};
