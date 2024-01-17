import React from "react";
import img from "../../assets/shirt.png";
import { ProductCardStyle } from "./Card.style";

function ProductCard() {
  return (
    <ProductCardStyle>
      <picture>
        <img src={img} alt="Shirt" />
      </picture>

      <figcaption className="card-details">
        <h2 className="product-name">Man T-Shirt</h2>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          officia est,
        </p>

        <article className="product-options-wrapper">
          <p className="sizes">S M L XL</p>
          <h3 className="prize">$17.99</h3>
        </article>

        <button>Add To Cart</button>
      </figcaption>
    </ProductCardStyle>
  );
}

export default ProductCard;
