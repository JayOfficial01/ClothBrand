import styled from "styled-components";
import { FlexboxStyle, Positioning } from "../../styles/constant";

export const CartItemCardStyle = styled.figure`
  ${FlexboxStyle({ justify: "space-between" })};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  padding: 0.7rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  .product-details {
    ${FlexboxStyle({ justify: "flex-start", gap: "2rem" })};

    picture {
      img {
        width: 3rem;
      }
    }

    figcaption {
      .heading {
        font-weight: 500;
        font-size: 1.3rem;
      }

      .price {
        font-size: 1.8rem;
      }
    }
  }
`;

export const ProductCardStyle = styled.figure`
  text-align: center;
  background: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
  border-radius: 1rem;
  padding: 2rem 0;

  transition: 0.3s all linear;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.PRIMARY_COLOR};

    .card-details {
      color: ${({ theme }) => theme.colors.WHITE_COLOR};

      button {
        border: 0.1rem solid ${({ theme }) => theme.colors.WHITE_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
      }
    }
  }

  picture {
    ${Positioning({ top: "-9rem" })};
    ${FlexboxStyle};

    img {
      max-width: 100%;
    }
  }

  .card-details {
    margin-top: -5rem;
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

    .product-name {
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 2rem;
    }

    .description {
      margin: 0 auto;

      line-height: 2rem;
      max-width: 25rem;
      width: 100%;
    }

    .product-options-wrapper {
      ${FlexboxStyle({ gap: "5rem", align: "center" })};

      width: 100%;
      padding: 2rem;

      p {
        font-size: 1rem;
      }
    }

    button {
      padding: 1rem 3rem;
      border-radius: 5rem;
      background: none;
      border: 0.1rem solid ${({ theme }) => theme.colors.SECONDARY_COLOR};
      color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.colors.WHITE_COLOR};
        color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
      }
    }
  }
`;

export const CategoryCardStyle = styled.figure`
  position: relative;

  .wrapper-heading {
    position: absolute;
    margin: 5.2rem 2.3rem;

    .image-heading {
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 2rem;
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        font-size: 20px;
      }
    }
    .image-text {
      font-size: 14px;
      padding-bottom: 1rem;
      text-align: left;
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        font-size: 9px;
      }
    }
    .image-subheading {
      font-size: 18px;
      padding-bottom: 1rem;
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        font-size: 10px;
      }
    }
    .arrow-icon {
      font-size: 3rem;
      padding: 2rem 4rem;
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        font-size: 2rem;
      }
    }

    button {
      border: 0.1rem solid black;
      color: black;
      background-color: transparent;
      padding: 1rem 2rem;
      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        padding: 0.5rem 1rem;
      }
    }
  }
`;
