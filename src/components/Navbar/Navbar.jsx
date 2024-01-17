import React, { useState } from "react";
import { BsCart2, BsJustifyRight } from "react-icons/bs";

import { menus } from "../../data/menus";

import { CartListWrapperStyle, NavbarStyle } from "./Navbar.style";
import Card from "../Card/Card";

export const CartListWrapper = (props) => {
  const { showCartItems } = props;
  return (
    <CartListWrapperStyle active={showCartItems}>
      <article className="cart-list-wrapper">
        <h1 className="title">Cart List</h1>

        <article className="cart-list">
          <Card cardType="cartItem" />
          <Card cardType="cartItem" />
        </article>
      </article>

      <article className="cart-footer">
        <article className="total-price-section">
          <p className="total-text">Total</p>
          <p className="total-price">$40</p>
        </article>

        <button className="order-now-btn">Order Now</button>
      </article>
    </CartListWrapperStyle>
  );
};

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [showCartItems, setShowCartItems] = useState(false);

  return (
    <NavbarStyle active={menuActive}>
      <article className="navbar-container">
        <article className="navbar-left">
          <h1 className="logo">ClothsBrand</h1>
        </article>

        <article className="navbar-right">
          <ul className="menu-wrapper">
            {menus.map((menu, index) => (
              <li className="menu-item">
                <a key={index} href={menu.url}>
                  {menu.menuText}
                </a>
              </li>
            ))}
          </ul>

          <span
            className="menu-icon"
            onClick={() => setMenuActive(!menuActive)}
          >
            <BsJustifyRight />
          </span>

          <span
            className="cart-icon"
            onClick={() => setShowCartItems(!showCartItems)}
          >
            <BsCart2 />

            <span className="item-count">1</span>
          </span>
          <CartListWrapper showCartItems={showCartItems} />
        </article>
      </article>
    </NavbarStyle>
  );
}

export default Navbar;
