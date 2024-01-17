import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  FlexboxStyle,
  GridBoxStyle,
  Positioning,
} from "../../styles/constant";

export const ProductBannerStyle = styled.article`
  background: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};

  .product-banner-container {
    ${GridBoxStyle({ column: "1fr 1fr", align: "center" })};
    ${CustomContainer};

    padding: 5rem 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    &:hover {
      .product-image {
        img {
          transform: scale(1.02);
        }
      }
    }

    .product-image {
      ${FlexboxStyle};

      order: ${({ active }) => (active ? 2 : 1)};

      img {
        max-width: 100%;
        width: 40rem;
        transition: 0.3s all linear;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          width: 20rem;
        }
      }
    }

    .banner-details {
      order: ${({ active }) => (active ? 1 : 2)};

      color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
      border-left: ${({ active }) =>
        active
          ? "unset"
          : `0.3rem solid ${({ theme }) => theme.colors.GRAY_COLOR}`};
      border-right: ${({ active }) =>
        active
          ? `0.3rem solid ${({ theme }) => theme.colors.GRAY_COLOR}`
          : "unset"};
      padding: 0 5rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
        border-left: none;
        padding: 0 2rem;
      }

      .banner-no {
        display: block;
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      .sub-heading {
        font-size: 4rem;
        font-weight: 400;
        text-transform: uppercase;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          font-size: 3rem;
        }
      }

      .heading {
        ${Positioning}

        font-size: 5rem;
        font-weight: 800;
        text-transform: uppercase;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          font-size: 3rem;
        }

        &::after {
          ${Positioning({ position: "absolute", bottom: "-1rem", left: "0" })};

          content: "";
          width: 5rem;
          height: 0.4rem;
          background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          border-radius: 5rem;
        }
      }

      p {
        font-size: 1.5rem;
        padding: 3rem 0;
        line-height: 2.5rem;
      }

      button {
        padding: 1rem 2rem;
        border-radius: 5rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        background: none;

        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          width: 100%;
        }

        &:hover {
          background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          color: ${({ theme }) => theme.colors.WHITE_COLOR};
        }
      }
    }
  }
`;
