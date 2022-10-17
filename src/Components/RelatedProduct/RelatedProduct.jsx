import React from "react";
import "./RelatedProduct.scss";
import ProductCard from "../ProductCard/ProductCard";
const RelatedProduct = (props) => {
  return (
    <div className="related-product">
      <h3 className="related-product-label mb-3">Related Products</h3>
      <div className="related-product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProduct;
