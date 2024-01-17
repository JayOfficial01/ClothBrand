import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  FlexboxStyle,
  GridBoxStyle,
  Positioning,
} from "../../styles/constant";

export const FooterStyle = styled.footer`
  background: ${({ theme }) => theme.colors.DARK_GRAY_COLOR};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  padding: 5rem 0;

  margin-top: 10rem;

  .footer-top {
    ${GridBoxStyle({ column: "1fr 1fr 1fr", align: "flex-start" })};
    ${CustomContainer};
    ${CustomSpacing}

    @media (max-width : ${({ theme }) => theme.breakPoints.tablets}) {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    .company-details {
      .logo {
        h1 {
          padding-bottom: 1rem;
          font-weight: 800;
        }
      }

      .location {
        .email {
          font-size: 1.5rem;
          padding-bottom: 0.5rem;
          font-weight: 400;
        }

        .address {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }

    .footer-menus {
      list-style: none;

      li {
        a {
          display: block;
          font-size: 1.4rem;
          margin-bottom: 2rem;
          transition: 0.3s all linear;

          &:hover {
            color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          }
        }
      }
    }

    .get-in-touch {
      .subscriber-wrapper {
        ${FlexboxStyle};

        input {
          padding: 1.2rem 2rem;
          width: 100%;
          border-radius: 2rem;
          border: none;
          outline: none;
          color: ${({ theme }) => theme.colors.DARK_GRAY_COLOR};
        }

        button {
          padding: 1.2rem 2rem;
          border-radius: 5rem;
          border: none;
          background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          cursor: pointer;
        }
      }

      .social-links {
        ${FlexboxStyle({ justify: "flex-start" })};

        list-style: none;
        padding: 3rem 0;

        li {
          a {
            ${FlexboxStyle};

            background: ${({ theme }) => theme.colors.WHITE_COLOR};
            color: ${({ theme }) => theme.colors.DARK_GRAY_COLOR};
            font-size: 2rem;
            padding: 1rem;
            border-radius: 0.5rem;
            transition: 0.3s all linear;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    ${CustomContainer};
    ${CustomSpacing}

    padding: 5rem;
    text-align: center;
  }
`;

export const BannerWrapperStyle = styled.article`
  ${Positioning({ top: "-10rem" })};
  ${GridBoxStyle({ column: "repeat(4, 1fr)" })};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  padding: 4rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
  max-width: 120rem;
  margin: 0 auto;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
    margin: 0 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
    grid-template-columns: 1fr;
  }

  > article {
    ${FlexboxStyle};

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      justify-content: flex-start;
    }

    .icon {
      ${FlexboxStyle};

      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      color: ${({ theme }) => theme.colors.WHITE_COLOR};
      width: 5rem;
      height: 5rem;
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 3rem;
    }

    .details {
      .heading {
        font-weight: 800;
        margin-bottom: 0.5rem;
      }

      .sub-heading {
        font-weight: 400;
        font-size: 1.2rem;
      }
    }
  }
`;
