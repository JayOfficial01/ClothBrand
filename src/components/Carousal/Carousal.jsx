import React from "react";
import bgImageOne from "../../assets/carousal-images/banner-image.png";
import bgImageTwo from "../../assets/carousal-images/banner-image.jpg";

import { CarousalItemStyle, CarousalStyle } from "./Carousal.style";

const CarousalItem = (props) => {
  const { heading, title, image } = props;
  return (
    <CarousalItemStyle bg={image}>
      <article className="carousal-container">
        <h3>{heading}</h3>
        <h1>{title}</h1>
        <button>Shop Now</button>
      </article>
    </CarousalItemStyle>
  );
};

function Carousal() {
  const carousalItems = [
    {
      heading: "T-Shirt / Tops",
      title: "Summer Value Pack",
      image: bgImageOne,
    },
    {
      heading: "Pent / Jeans",
      title: "Summer Value Pack",
      image: bgImageTwo,
    },
  ];

  return (
    <CarousalStyle autoplay>
      {carousalItems.map((item, index) => (
        <CarousalItem key={index} {...item} />
      ))}
    </CarousalStyle>
  );
}

export default Carousal;
