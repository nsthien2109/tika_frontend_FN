import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeProducts.scss";
const HomeProducts = (props) => {
  return (
    <div className="home-products">
      <div className="home-products__container">
        <div className="home-products__header">
          <div className="home-products__header-left">
            <h3 className="home-products__header-title">Products</h3>
            <p className="home-products__header-subtitle">
              New products with updated stocks.
            </p>
          </div>
          <a href="#aaa" className="home-products__header-btn">
            View all
          </a>
        </div>
        <div className="home-products-list grid-cols-2 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="home-products__bottom">
          <div className="home-products__bottom-btn">Show more</div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
