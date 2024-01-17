import { Carousel } from "antd";
import styled from "styled-components";
import {
  CustomContainer,
  CustomSpacing,
  FlexboxStyle,
} from "../../styles/constant";

export const CarousalStyle = styled(Carousel)``;

export const CarousalItemStyle = styled.article`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 75rem;

  .carousal-container {
    ${CustomContainer};
    ${CustomSpacing};
    ${FlexboxStyle({ direction: "column", align: "flex-start" })}

    padding: 1rem;
    height: inherit;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};

    h3 {
      font-size: 4rem;
      font-weight: 400;
    }

    h1 {
      font-size: 10rem;
      width: 60rem;
      line-height: 10rem;
      text-transform: uppercase;
      margin-bottom: 4rem;
    }

    button {
      padding: 1.7rem 5rem;
      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
