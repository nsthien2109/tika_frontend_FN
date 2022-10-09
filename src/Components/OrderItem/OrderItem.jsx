import React from "react";
import "./OrderItem.scss";
import imgProduct from "../../Assets/imgProduct.jpg";

const OrderItem = (props) => {
  return (
    <div className="order-item">
      <div className="order-item__header">
        <div className="order-item__header-item">
          <div className="title">Order</div>
          <div className="subtitle">#1234</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Date</div>
          <div className="subtitle">21 - 09 - 2022</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Status</div>
          <div className="subtitle">Processing</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Total</div>
          <div className="subtitle">$27.05 for 2 items</div>
        </div>
      </div>
      <div className="order-item-list">
        <div className="order-item-product">
          <p className="order-item-product-name">
            All Natural Italian-Style Chicken Meatballs <span>x 2</span>
          </p>
          <img src={imgProduct} width="60" alt="" />
        </div>
        <div className="order-item-product">
          <p className="order-item-product-name">
            All Natural Italian-Style Chicken Meatballs <span>x 2</span>
          </p>
          <img src={imgProduct} width="60" alt="" />
        </div>
        <div className="order-item-product">
          <p className="order-item-product-name">
            All Natural Italian-Style Chicken Meatballs <span>x 2</span>
          </p>
          <img src={imgProduct} width="60" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
