import React from "react";
import storeDemo from "../../Assets/storeDem.jpg";
import "./SlideShopItem.scss";
import { serverNetwork } from "../../Services/utils/value";

const SlideShopItem = (props) => {
  return (
    <div className="slideshop-item">
      <div className="slideshop-item__container">
        <img
          src={`${serverNetwork}/${props.store?.storeBackgroundImage}`}
          className="slideshop-item-img object-cover"
          alt=""
        />
        <div className="slideshop-item-content">
          <h3>{props.store?.storeName}</h3>
          <p>Tika Weekend Discount</p>
          <div className="slideshop-item-content-btn">Shop Now</div>
        </div>
      </div>
    </div>
  );
};

export default SlideShopItem;
