import React from "react";
import storeDemo from "../../Assets/storeDem.jpg";
import "./SlideShopItem.scss";
const SlideShopItem = (props) => {
  return (
    <div className="slideshop-item">
      <div className="slideshop-item__container">
        <img src={storeDemo} className="slideshop-item-img" alt="" />
        <div className="slideshop-item-content">
          <h3>Cookie and Ice Cream</h3>
          <p>Tika Weekend Discount</p>
          <div className="slideshop-item-content-btn">Shop Now</div>
        </div>
      </div>
    </div>
  );
};

export default SlideShopItem;
