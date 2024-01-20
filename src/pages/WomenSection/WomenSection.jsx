import React from 'react';
import { WomenSectionStyle } from "./WomenSection.style";
import ArticleCard from '../../components/Card/ArticleCard';
import shirt from "../../assets/women-shirt.png";
import shirt2 from "../../assets/women-shirt2.png";
import shirt3 from "../../assets/women-shirt3.png";
import shirt4 from "../../assets/women-shirt4.png";
import shirt5 from "../../assets/women-shirt5.png";
import shirt6 from "../../assets/women-shirt6.png";
import shirt7 from "../../assets/women-shirt7.png";
import shirt8 from "../../assets/women-shirt8.png";

function WomenSection() {
  const articles = [
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt2 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt3 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt4 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt5 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt6 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt7 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt8 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt2 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt3 },
    { heading: "Black Sweatshirt with ....", product: "Jhanvi’s Brand", price: "$123.99", imgSrc: shirt4 },
  ];

  return (
    <WomenSectionStyle>
      <div style={{ width: "100%", height: "20px", display: "flex", justifyContent: "space-between", padding: "30px 50px 30px 10px" }}>
        <h3>Women Clothing</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <h3 style={{ color: " #8A33FD" }}>New</h3>
          <h3>Recommended</h3>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {articles.map((article, index) => (
          <div key={index} style={{ width: "calc(25% - 20px)", marginBottom: "120px" }}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </WomenSectionStyle>
  );
}

export default WomenSection;
