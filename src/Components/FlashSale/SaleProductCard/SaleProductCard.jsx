import React from "react";
import "./SaleProductCard.scss";
import imgProduct from "../../../Assets/imgProduct.jpg";

const SaleProductCard = (props) => {
  return (
    <div className="sale-product-card">
      <div className="sale-product-container">
        <div className="sale-product-img">
          <img src={imgProduct} alt="" />
          <span className="sale-product-img-percent">15%</span>
          <div className="sale-product-img-more">
            <div className="view-detail-btn">
              <i className="ri-drag-move-fill"></i>
            </div>
            <div className="favorite-btn">
              <i className="ri-heart-3-line"></i>
            </div>
          </div>
        </div>
        <div className="sale-product-info">
          <div className="sale-product-info-price">
            <span className="price">$20.12</span>
            <span className="sale-price">$15.37</span>
          </div>
          <div className="sale-product-info-name">
            Field Roast Chao Cheese Creamy Original
          </div>
          <span className="status">in stock</span>
          <div className="sale-product-info-star">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
          </div>
          <div className="sale-product-info-avalible">
            The avalible products : <span>24</span>
          </div>
          <div className="sale-product-info-cart">
            <div className="sale-product-info-cart-btn">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;
