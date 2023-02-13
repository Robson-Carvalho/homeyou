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

export const Design = styled.section`
  width: 100%;
  padding: 129px 24px 132px 24px;
  background-color: #fff;

  @media (max-width: 1260px) {
    padding: 40px 24px 42px 24px;
  }
`;

export const ContentDesign = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    width: 487px;
    height: 457px;
    background-color: #272727;

    img {
      margin: 50px 0 0 50px;

      width: 487px;
      height: 457px;
    }

    @media (max-width: 1260px) {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    justify-content: center;
  }
`;

export const InfoDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 1260px) {
    align-items: center;
  }

  div {
    max-width: 585px;
    width: 100%;
    height: 182px;
    padding: 20px 33px 30px 31px;

    background: #272727;

    @media (max-width: 900px) {
      padding: 16px;
    }

    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 20px;
      color: #fff;

      @media (max-width: 900px) {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 14px;
      }
    }

    span {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      /* or 26px */

      color: #fff;

      @media (max-width: 900px) {
        font-size: 14px;
        line-height: 140%;
      }
    }
  }

  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-decoration-line: underline;

    color: #272727;

    @media (max-width: 900px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const Gallery = styled.section`
  width: 100%;
  background-color: #f9f9f9;
  padding: 55px 24px 47px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 838px) {
    padding: 40px 24px;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 19px;

    color: #272727;

    @media screen and (max-width: 838px) {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }

  span {
    max-width: 771px;
    width: 100%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */

    text-align: center;

    color: #797979;

    @media screen and (max-width: 838px) {
      font-size: 14px;
      line-height: 140%;
      /* or 20px */
    }
  }

  div {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    img {
      max-width: 396px;
      width: 100%;
    }
  }
`;

export const Budget = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 78px 24px;

  @media screen and (max-width: 838px) {
    padding: 40px 24px;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #272727;
    margin-bottom: 17px;

    @media screen and (max-width: 838px) {
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
    line-height: 22px;
    /* identical to box height */

    text-align: center;

    color: #797979;

    @media screen and (max-width: 838px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      /* or 20px */
    }
  }

  a {
    margin-top: 48px;
    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #272727;

    padding: 12px 32px;
    background: #ffffff;
    border: 1px solid #272727;

    @media screen and (max-width: 838px) {
      margin-top: 40px;
      padding: 8px 20px;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
