import React from "react";
import "./OrderItem.scss";
import imgProduct from "../../Assets/imgProduct.jpg";

const OrderItem = (props) => {
  const order = props.order;
  return (
    <div className="order-item">
      <div className="order-item__header">
        <div className="order-item__header-item">
          <div className="title">OrderId</div>
          <div className="subtitle">#{order?.id_order}</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Phone</div>
          <div className="subtitle">{order?.orderPhone}</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Payment</div>
          <div className="subtitle">{order?.paymentMethod}</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Status</div>
          <div className="subtitle">{order?.statusType}</div>
        </div>
        <div className="order-item__header-item">
          <div className="title">Total</div>
          <div className="subtitle">${order?.orderTotal}</div>
        </div>
      </div>
      {/* <div className="order-item-list">
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
      </div> */}
    </div>
  );
};

export default OrderItem;
