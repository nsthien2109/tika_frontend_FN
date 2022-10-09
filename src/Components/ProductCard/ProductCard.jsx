import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import imgProduct from "../../Assets/imgProduct.jpg";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-container">
        <div className="product-img">
          <img src={imgProduct} alt="" />
          <span className="product-img-percent">15%</span>
          <div
            className="product-img-more"
            onClick={(event) => event.stopPropagation()}>
            <div className="view-detail-btn">
              <i className="ri-drag-move-fill"></i>
            </div>
            <div className="favorite-btn">
              <i className="ri-heart-3-line"></i>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-price">
            <span className="price">$20.12</span>
            <span className="sale-price">$15.37</span>
          </div>
          <Link to="/detail" className="product-info-name">
            Field Roast Chao Cheese Creamy Original
          </Link>
          <span className="status">in stock</span>
          <div className="product-info-star">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
          </div>
          <div className="product-info-cart">
            <div className="product-info-cart-btn">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
