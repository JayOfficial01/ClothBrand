import React from "react";
import img1 from "../../assets/savingzone/image1.png";
import img2 from "../../assets/savingzone/image2.png";
import img3 from "../../assets/savingzone/image3.png";
import img4 from "../../assets/savingzone/image4.png";
import img5 from "../../assets/savingzone/image5.png";
import { SavingZoneStyle } from "./SavingZone.style";
import Card from "../Card/Card";

function SavingZone() {
  return (
    <SavingZoneStyle>
      <h2 className="heading-zone">Big Saving Zone</h2>
      <div className="wrapper">
        <Card
          cardType="categoryCard"
          img={img1}
          heading1="Hawaiian"
          heading2="Shirts"
          description="Dress up in summer vibe"
          subheading="UPTO 50% OFF"
          className="item1 item"
        />
        <Card
          cardType="categoryCard"
          img={img2}
          limitedStock={true}
          heading1="Printed"
          heading2="T-Shirts"
          description="New Design Every Week"
          subheading="UPTO 40% OFF"
          className="item2 item"
        />
        <Card
          cardType="categoryCard"
          img={img3}
          heading1="Cargo"
          heading2="Joggers"
          description="Move with style & comfort"
          subheading="UPTO 50% OFF"
          className="item3 item"
        />
        <Card
          cardType="categoryCard"
          img={img4}
          heading1="Urban"
          heading2="Shirts"
          description="Live in Confort"
          subheading="UPTO 60% OFF"
          className="item4 item"
        />
        <Card
          cardType="categoryCard"
          img={img5}
          heading1="Oversized"
          heading2="T-Shirts"
          description="Street Style Icon"
          subheading="UPTO 60% OFF"
          className="item4 item"
        />
      </div>
    </SavingZoneStyle>
  );
}

export default SavingZone;
