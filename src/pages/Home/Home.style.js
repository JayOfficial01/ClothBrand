import styled from "styled-components";

import {
  CustomContainer,
  CustomSpacing,
  GridBoxStyle,
} from "../../styles/constant";

export const HomeStyle = styled.main`
  padding-top: 6.5rem;
`;

export const CatogoiresStyle = styled.article`
  ${CustomContainer};

  padding: 5rem 1.5rem;
`;

export const HotItemWrapperStyle = styled.article`
  background-size: cover;
  padding: 1rem 3rem 10rem 3rem;
  margin-top: 10rem;

  .hot-items-container {
    ${CustomContainer};
    ${CustomSpacing};

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      padding: 0;
    }

    .section-title {
      text-align: center;
      color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

      .title {
        font-weight: 900;
        font-size: 3rem;
      }
    }

    .cart-items {
      ${GridBoxStyle({ column: "repeat(3, 1fr)", gap: "5rem" })}

      margin-top: 12rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        grid-template-columns: 1fr;
        gap: 10rem;
      }
    }
  }
`;
