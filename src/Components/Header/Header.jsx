import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { FilterProduct_Slice } from "../../Redux/Slice/FilterProduct_Slice";
import { loginSelector, cartSelector } from "../../Redux/selector";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState();
  const loginCheck = useSelector(loginSelector);
  const cart = useSelector(cartSelector);

  const subTotal = cart?.reduce((accumulator, object) => {
    return accumulator + object.productPrice * object.quantity;
  }, 0);

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
            value={searchText}
            className="header__search-input"
            placeholder="Search for products ..."
          />
        </div>
        <div className="header__right">
          <Link
            className="header__right__user-icon"
            to={loginCheck != null ? `/profile` : `/auth`}>
            <i className="ri-user-3-line"></i>
          </Link>
          <span className="header__right__cart-total">$ {subTotal}.00</span>
          <Link to="cart" className="header__right__cart-icon">
            <i className="ri-shopping-cart-line"></i>
            <div className="header__right__cart-icon-number">
              {cart?.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
