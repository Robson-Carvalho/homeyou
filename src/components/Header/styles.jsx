import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media (max-width: 900px) {
    height: 72px;
  }
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

    @media (max-width: 900px) {
      width: 24px;
      height: 24px;
    }
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #272727;

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;

    span {
      display: block;
      width: 28px;
      border-top: 1px solid;
      color: #272727;

      ${({ menuIsVisible }) =>
        menuIsVisible &&
        css`
          border-top-color: transparent;
        `}
    }

    span::after {
      content: "";
      display: block;
      width: 28px;
      height: 1px;

      background: currentColor;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;

      ${({ menuIsVisible }) =>
        menuIsVisible &&
        css`
          transform: rotate(-135deg);
          top: -7px;
        `}
    }

    span::before {
      content: "";
      display: block;
      width: 28px;
      height: 1px;

      background: currentColor;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;

      ${({ menuIsVisible }) =>
        menuIsVisible &&
        css`
          transform: rotate(135deg);
        `}
    }
  }
`;

export const Menu = styled.menu`
  display: flex;
  flex-direction: row;
  gap: 48px;

  li {
    a {
      text-decoration: none;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */

      color: #272727;

      @media (max-width: 900px) {
        font-size: 16px;
      }
    }

    img {
      width: 21px;
      height: 21px;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;

    position: absolute;
    top: 72px;
    right: 0;

    width: 100%;
    height: 0;
    padding-top: 45px;
    background-color: #f9f9f9;

    overflow-y: hidden;
    visibility: hidden;

    transition: 0.3s ease-in;

    ${({ menuIsVisible }) =>
      menuIsVisible &&
      css`
        height: calc(100% - 72px);
        visibility: visible;
      `}
  }
`;
