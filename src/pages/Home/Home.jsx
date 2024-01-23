import React from "react";
import { Card, Carousal, ProductBanner, SavingZone } from "../../components";
import { HomeStyle, HotItemWrapperStyle } from "./Home.style";

const HotItemWrapper = () => {
  return (
    <HotItemWrapperStyle>
      <article className="hot-items-container">
        <article className="section-title">
          <h1 className="title">Our Hot Products</h1>
          <p className="description">Our most sold product for these season</p>
        </article>

        <article className="cart-items">
          <Card cardType="productCard" />
          <Card cardType="productCard" />
          <Card cardType="productCard" />
        </article>
      </article>
    </HotItemWrapperStyle>
  );
};

// const Catogories = () => {
//   return <CatogoiresStyle>CatogoiresStyle</CatogoiresStyle>;
// };

function Home() {
  return (
    <HomeStyle>
      <Carousal />
      {/* <Catogories /> */}
      <HotItemWrapper />

      <ProductBanner isRightActive />
      <SavingZone />
    </HomeStyle>
  );
}

export default Home;
