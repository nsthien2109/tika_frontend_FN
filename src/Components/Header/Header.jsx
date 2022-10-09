import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__menu" onClick={props.showDrawer}>
          <i className="ri-menu-2-line"></i>
        </div>
        <div className="header__logo">
          <Link to="/" className="header__logo-text">
            Tika
          </Link>
          <p className="header__logo-sub-text">
            Online Grocery Shopping Center
          </p>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search for products ..."
          />
        </div>
        <div className="header__right">
          <Link className="header__right__user-icon" to="/auth">
            <i className="ri-user-3-line"></i>
          </Link>
          <span className="header__right__cart-total">$ 270.02</span>
          <Link to="cart" className="header__right__cart-icon">
            <i className="ri-shopping-cart-line"></i>
            <div className="header__right__cart-icon-number">2</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
