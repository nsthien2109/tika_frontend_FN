import React from "react";
import "./MobileNavigator.scss";

function MobileNavigator(props) {
  return (
    <div className="nav-mobile">
      <div className="nav-mobile__item">
        <i className="ri-home-5-line"></i>
        <span className="nav-mobile__item-text">Home</span>
      </div>
      <div className="nav-mobile__item">
        <i className="ri-file-list-line"></i>
        <span className="nav-mobile__item-text">Category</span>
      </div>
      <div className="nav-mobile__item">
        <i className="ri-search-line"></i>
        <span className="nav-mobile__item-text">Search</span>
      </div>
      <div className="nav-mobile__item">
        <i className="ri-heart-3-line"></i>
        <span className="nav-mobile__item-text">Wishlist</span>
      </div>
      <div className="nav-mobile__item">
        <i className="ri-user-settings-line"></i>
        <span className="nav-mobile__item-text">Account</span>
      </div>
    </div>
  );
}

export default MobileNavigator;
