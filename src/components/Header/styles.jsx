import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Nav = styled.nav`
  max-width: 1230px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
    background: #272727;
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #272727;
  }
`;

export const MobileButton = styled.button``;

export const Menu = styled.menu``;

export const Interactions = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
`;
