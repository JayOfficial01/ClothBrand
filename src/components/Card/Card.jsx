import React from "react";
import CartItemCard from "./CartItemCard";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

function Card(props) {
  const { cardType } = props;

  switch (cardType) {
    case "cartItemCard":
      return <CartItemCard {...props} />;

    case "productCard":
      return <ProductCard {...props} />;

    case "categoryCard":
      return <CategoryCard {...props} />;

    default:
      return <CartItemCard {...props} />;
  }
}

export default Card;
