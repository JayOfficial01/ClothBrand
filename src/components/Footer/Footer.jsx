import React from "react";
import { BsTruck, BsClock, BsCash, BsBox2 } from "react-icons/bs";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { menus } from "../../data/menus";
import { BannerWrapperStyle, FooterStyle } from "./Footer.style";

const BannerWrpper = () => {
  return (
    <BannerWrapperStyle>
      <article>
        <span className="icon">
          <BsTruck />
        </span>
        <article className="details">
          <h2 className="heading">Free Shipping</h2>
          <h3 className="sub-heading">Free Shipping on order</h3>
        </article>
      </article>
      <article>
        <span className="icon">
          <BsClock />
        </span>
        <article className="details">
          <h2 className="heading">Support 24/7</h2>
          <h3 className="sub-heading">Contact us 24 hours and 7 days a week</h3>
        </article>
      </article>
      <article>
        <span className="icon">
          <BsCash />
        </span>
        <article className="details">
          <h2 className="heading">Cash on Dilevery</h2>
          <h3 className="sub-heading">Cash us when you recive your parcel</h3>
        </article>
      </article>
      <article>
        <span className="icon">
          <BsBox2 />
        </span>
        <article className="details">
          <h2 className="heading">Quality</h2>
          <h3 className="sub-heading">
            We Focus more on quality rather then quantity
          </h3>
        </article>
      </article>
    </BannerWrapperStyle>
  );
};

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "#",
    },
    {
      icon: <FaInstagram />,
      url: "#",
    },
  ];

  return (
    <FooterStyle>
      <BannerWrpper />

      <article className="footer-top">
        <article className="company-details">
          <article className="logo">
            <h1>ClothsBrand</h1>
          </article>

          <article className="location">
            <h3 className="email">support@gmail.com</h3>
            <h3 className="address">Rawalpindi, Pakistan </h3>
          </article>
        </article>
        <ul className="footer-menus">
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={menu.url}>{menu.menuText}</a>
            </li>
          ))}
        </ul>

        <article className="get-in-touch">
          <article className="subscriber-wrapper">
            <input type="text" placeholder="Email" />
            <button>Subscriber</button>
          </article>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </article>
      </article>
      <article className="footer-bottom">
        <p>Copyright © 2024 clothbrand Pvt Ltd. All right reserved.</p>
      </article>
    </FooterStyle>
  );
}

export default Footer;
