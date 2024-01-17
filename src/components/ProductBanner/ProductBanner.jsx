import React from "react";
import img from "../../assets/shirt.png";
import { ProductBannerStyle } from "./ProductBanner.style";

function ProductBanner(props) {
  const { isRightActive = false } = props;
  return (
    <ProductBannerStyle active={isRightActive}>
      <article className="product-banner-container">
        <article className="product-image">
          <img src={img} alt="Shirt" />
        </article>

        <article className="banner-details">
          <span className="banner-no">.02</span>
          <h3 className="sub-heading">T Shirt</h3>
          <h2 className="heading">Red Color Shirt</h2>

          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            sapiente ipsa, aperiam dolor numquam, eius quo in rem, ex libero sit
            vitae adipisci fuga culpa nesciunt natus ad! Nostrum, beatae!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            sapiente ipsa, aperiam dolor numquam, eius quo in rem, ex libero sit
            vitae adipisci fuga culpa nesciunt natus ad! Nostrum, beatae!
          </p>

          <button>Intrested?</button>
        </article>
      </article>
    </ProductBannerStyle>
  );
}

export default ProductBanner;
