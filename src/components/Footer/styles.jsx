import styled from "styled-components";

export const Container = styled.footer`
  background: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 90px 24px;

  @media screen and (max-width: 838px) {
    padding: 40px 24px;
  }

  div {
    max-width: 1230px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 69px;

    @media screen and (max-width: 838px) {
      flex-wrap: wrap;
    }

    img {
      width: 40px;
      height: 40px;
      background: #272727;

      @media screen and (max-width: 838px) {
        display: none;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      gap: 117px;

      @media screen and (max-width: 838px) {
        justify-content: space-between;
        gap: 32px;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        @media screen and (max-width: 838px) {
          gap: 3px;
        }

        h3 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */

          text-align: center;

          color: #272727;
          margin-bottom: 5px;

          @media screen and (max-width: 838px) {
            margin-bottom: 3px;
            font-size: 14px;
            line-height: 17px;
          }
        }

        li {
          a {
            text-decoration: none;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */

            color: #272727;

            @media screen and (max-width: 838px) {
              font-size: 12px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
`;
