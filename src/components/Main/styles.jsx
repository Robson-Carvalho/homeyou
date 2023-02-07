import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Home = styled.section`
  width: 100%;
  background: #f9f9f9;

  @media (max-width: 1260px) {
    padding: 40px 24px 42px 24px;
  }
`;

export const ContentHome = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 660px;
    height: 850px;

    @media (max-width: 1260px) {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    justify-content: center;
  }
`;

export const InfoHome = styled.div`
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: left;

    color: #272727;
    margin-bottom: 16px;

    @media (max-width: 900px) {
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 24px;
    }
  }

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #797979;
    margin-bottom: 32px;
    text-align: left;

    @media (max-width: 1260px) {
      height: 80px;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
    }
  }

  div {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    a {
      &:first-child {
        text-decoration: none;
        padding: 12px 32px;
        background: #272727;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */

        color: #ffffff;

        @media (max-width: 900px) {
          padding: 8px 20px;
          font-size: 12px;
          line-height: 15px;
        }
      }

      &:last-child {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */

        text-decoration-line: underline;

        color: #272727;

        @media (max-width: 900px) {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;

export const Gallery = styled.section``;

export const Contact = styled.section``;
