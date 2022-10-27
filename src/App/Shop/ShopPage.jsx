import React from "react";
import Filter from "../../Components/Filter/Filter";
import "./ShopPage.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import bannerDemo from "../../Assets/bannerDemo.jpg";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { productListFilter, subCategoryByCategory } from "../../Redux/selector";

const ShopPage = (props) => {
  const idCategory = useParams();
  const products = useSelector(productListFilter);
  const subCategories = useSelector(subCategoryByCategory);
  return (
    <div className="shop-page">
      <div className="shop-page__container">
        <div className="shop-page__header h-1/2 md:h-1/3 lg:h-1/4 relative">
          <img src={bannerDemo} alt="" />
          <div className="shop-page__header-content absolute w-full h-full top-0 left-0">
            <h5>Clothes</h5>
            <h3>
              Delivery to <span>your Home</span>{" "}
            </h3>
            <p>Sologan category</p>
          </div>
        </div>
        <div className="shop-page__content">
          <div className="shop-page__content-filter hidden lg:block">
            <Filter subCategories={subCategories} />
          </div>
          <div className="shop-page__content-products">
            <div className=" grid grid-cols-2 gap-2 lg:grid-cols-4">
              {products &&
                products?.map((product) => {
                  return (
                    <ProductCard product={product} key={product.id_product} />
                  );
                })}
            </div>
            <div className="shop-page-more">
              <div className="shop-page-more-btn">Show more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
