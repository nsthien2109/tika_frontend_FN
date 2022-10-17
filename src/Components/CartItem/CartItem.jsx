import React from "react";
import "./CartItem.scss";
import imgProduct from "../../Assets/imgProduct.jpg";
const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item__name-img">
        <img src={imgProduct} width="70" alt="" />
        <p className="product-name">Field Roast Chao Cheese Creamy Original</p>
      </div>
      <div className="cart-item__more">
        <div className="cart-item__more-price hidden sm:block">$20.43</div>
        <div className="cart-item__more-quantity">
          <i className="ri-subtract-line"></i>
          <span>2</span>
          <i className="ri-add-line"></i>
        </div>
        <div className="cart-item__more-subtotal hidden sm:block">$40.86</div>
        <div className="cart-item__more-remove hidden sm:block">
          <i className="ri-close-line"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
