import React from "react";
import CartItemCard from "./CartItemCard";
import ProductCard from "./ProductCard";

function Card(props) {
  const { cardType } = props;

  switch (cardType) {
    case "cartItemCard":
      return <CartItemCard {...props} />;

    case "productCard":
      return <ProductCard {...props} />;

    default:
      return <CartItemCard {...props} />;
  }
}

export default Card;
