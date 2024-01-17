import styled from "styled-components";
import { FlexboxStyle } from "../../styles/constant";

export const CounterStyle = styled.article`
  ${FlexboxStyle({
    gap: ".5rem",
    direction: ({ vertical }) => (vertical ? "column" : "row"),
  })};

  background: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
  padding: 0.6rem 1rem;
  border-radius: 1rem;

  button {
    ${FlexboxStyle};

    width: 2rem;
    height: 2rem;
    border: none;
    background: none;
    font-size: 2rem;

    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
    background: none;
    width: 3rem;
    height: 2rem;
    text-align: center;
  }
`;
