import styled from "styled-components";

export const SavingZoneStyle = styled.article`
  .heading-zone {
    color: #3c4242;
    font-size: 34px;
    font-weight: 600;
    padding: 20px 40px;
  }
  .wrapper {
    display: grid;
    /* 
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas: "itemm item2 item3" "item4 item5"; */
    grid-template-columns: repeat(6, 220px);

    grid-row-gap: 25px;
    /* justify-content: center; */
    justify-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      grid-template-columns: 1fr;
    }
    .item1 {
      color: white;
      .wrapper-heading {
        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          margin-left: 7rem;
          text-align: left;
        }
      }
      button {
        color: white;
        border: 0.1rem solid white;
      }
    }
    .item2 {
      color: white;
      .wrapper-heading {
        margin-left: 20rem;
        text-align: right;
      }
      button {
        color: white;
        border: 0.1rem solid white;
      }
    }
    .item3 {
      .wrapper-heading {
        margin-left: 20rem;
        text-align: left;
      }
    }
    .item4 {
      .wrapper-heading {
        margin-left: 37rem;
        text-align: left;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          margin-left: 29rem;
          text-align: right;
        }
      }
    }
    .item {
      display: flex;
      grid-column: span 2;
      position: relative;
    }
    .item:nth-last-child(2),
    .item:nth-last-child(1) {
      grid-column: span 3;
    }
  }
`;
