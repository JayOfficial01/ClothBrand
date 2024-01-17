import styled from "styled-components";
import {
  CustomContainer,
  FlexboxStyle,
  Positioning,
} from "../../styles/constant";

export const NavbarStyle = styled.nav`
  ${Positioning({ position: "fixed", top: 0, left: 0 })};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 2rem 1.5rem;
  z-index: 10;

  .navbar-container {
    ${Positioning};
    ${FlexboxStyle({ justify: "space-between" })};
    ${CustomContainer};

    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

    .navbar-left {
      h1 {
        font-size: 2rem;
        font-weight: 900;
      }
    }

    .navbar-right {
      ${FlexboxStyle({ gap: "2rem", justify: "flex-end" })};

      .menu-wrapper {
        ${FlexboxStyle({ gap: "2rem", justify: "flex-end" })};

        list-style: none;

        @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
          ${Positioning({ position: "fixed", top: "6rem", right: "0" })};

          background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          color: ${({ theme }) => theme.colors.WHITE_COLOR};

          width: 100%;
          height: ${({ active }) => (active ? "100vh" : 0)};
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 5rem;
          padding: 5rem;
          opacity: ${({ active }) => (active ? 1 : 0)};
          visibility: ${({ active }) => (active ? "visible" : "hidden")};
          transition: 0.3s all linear;
        }

        .menu-item {
          a {
            font-size: 1.3rem;
            font-weight: 500;
            text-transform: uppercase;
            transition: 0.3s all linear;

            @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
              border-bottom: 0.1rem solid
                ${({ theme }) => theme.colors.WHITE_COLOR};
            }

            &:hover {
              color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

              @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
                color: ${({ theme }) => theme.colors.WHITE_COLOR};
              }
            }
          }
        }
      }

      .menu-icon {
        font-size: 2rem;

        cursor: pointer;
        display: none;

        @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
          display: block;
        }
      }

      .cart-icon {
        ${Positioning};

        font-size: 1.5rem;
        cursor: pointer;

        span {
          ${Positioning({
            position: "absolute",
            top: "-.5rem",
            right: "-1rem",
          })};
          ${FlexboxStyle};

          background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          color: ${({ theme }) => theme.colors.WHITE_COLOR};
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const CartListWrapperStyle = styled.article`
  ${Positioning({ position: "absolute", top: "4rem", right: 0 })};

  background: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  box-shadow: -1px 1px 5px -2px rgba(143, 143, 143, 0.35);

  width: 100%;
  max-width: 40rem;

  border-radius: 0.8rem;
  overflow: hidden;

  display: ${({ active }) => (active ? "block" : "none")};

  .cart-list-wrapper {
    padding: 1rem;

    .title {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 900;
      padding: 1rem;
    }

    .cart-list {
      margin-top: 1.5rem;
    }
  }

  .cart-footer {
    background: ${({ theme }) => theme.colors.WHITE_COLOR};

    padding: 2rem;

    .total-price-section {
      ${FlexboxStyle({ justify: "space-between" })};

      p {
        font-weight: 500;
        font-size: 1.5rem;

        &.total-price {
          font-weight: 800;
        }
      }
    }

    .order-now-btn {
      display: block;

      padding: 1.5rem;
      width: 100%;
      margin-top: 1.5rem;
      border-radius: 1rem;
      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      color: ${({ theme }) => theme.colors.WHITE_COLOR};
      border: none;
      cursor: pointer;
    }
  }
`;
