import React from "react";
import "./CartItem.scss";
import { serverNetwork } from "../../Services/utils/value";
const CartItem = (props) => {
  const product = props.product;
  const price =
    product.productPrice - product.productPrice * (product.discount / 100);
  const cartItemPrice = price * product.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item__name-img">
        <img
          src={`${serverNetwork}/${product?.productImage}`}
          width="70"
          alt=""
        />
        <p className="product-name">{product.productName}</p>
      </div>
      <div className="cart-item__more">
        <div className="cart-item__more-price hidden sm:block">${price}.00</div>
        <div className="cart-item__more-quantity">
          <i className="ri-subtract-line"></i>
          <span>{product.quantity}</span>
          <i className="ri-add-line"></i>
        </div>
        <div className="cart-item__more-subtotal hidden sm:block">
          ${cartItemPrice}.00
        </div>
        <div
          className="cart-item__more-remove hidden sm:block"
          onClick={() => props.handleRemoveCart(product.id_cart)}>
          <i className="ri-close-line"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
