import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { CategoryCardStyle } from "./Card.style";

function CategoryCard(props) {
  const {
    img,
    heading1,
    heading2,
    description,
    subheading,
    className,
    limitedStock = false,
  } = props;
  return (
    <CategoryCardStyle className={className}>
      <img src={img} alt="" />
      <div className="wrapper-heading">
        {limitedStock && <button className="btn-stock">Limited Stock</button>}
        <h2 className="image-heading">
          {heading1}
          <br />
          {heading2}
        </h2>
        <p className="image-text">{description}</p>
        <h2 className="image-subheading">{subheading}</h2>
        <div className="arrow-icon">
          <BsArrowDown />
        </div>
        <button>SHOP NOW</button>
      </div>
    </CategoryCardStyle>
  );
}

export default CategoryCard;
