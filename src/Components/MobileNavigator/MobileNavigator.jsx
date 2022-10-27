import React from "react";
import "./MobileNavigator.scss";
import { Link } from "react-router-dom";

function MobileNavigator(props) {
  return (
    <div className="nav-mobile">
      <Link to="/" className="nav-mobile__item">
        <i className="ri-home-5-line"></i>
        <span className="nav-mobile__item-text">Home</span>
      </Link>
      <Link to="/category" className="nav-mobile__item">
        <i className="ri-file-list-line"></i>
        <span className="nav-mobile__item-text">Category</span>
      </Link>
      <Link to="#aaa" className="nav-mobile__item">
        <i className="ri-search-line"></i>
        <span className="nav-mobile__item-text">Search</span>
      </Link>
      <Link to="/profile" className="nav-mobile__item">
        <i className="ri-heart-3-line"></i>
        <span className="nav-mobile__item-text">Wishlist</span>
      </Link>
      <Link to="/profile" className="nav-mobile__item">
        <i className="ri-user-settings-line"></i>
        <span className="nav-mobile__item-text">Account</span>
      </Link>
    </div>
  );
}

export default MobileNavigator;
