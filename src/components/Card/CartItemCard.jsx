import React from "react";
import image from "../../assets/shirt.png";
import Counter from "../Counter/Counter";

import { CartItemCardStyle } from "./Card.style";

function CartItemCard() {
  return (
    <CartItemCardStyle>
      <article className="product-details">
        <picture className="product-image-thumbnail">
          <img src={image} alt="Product Image" />
        </picture>

        <figcaption>
          <h2 className="heading">T-Shirt For Men</h2>
          <h1 className="price">$20</h1>
        </figcaption>
      </article>

      <Counter isVertical />
    </CartItemCardStyle>
  );
}

export default CartItemCard;
