import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import imgProduct from "../../Assets/imgProduct.jpg";
import "./ProductHorizontal.scss";

const ProductHorizontal = (props) => {
  const sliderRef = useRef(null);
  const products = props.products;
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="product-horizontal">
      <div className="product-horizontal__container">
        <div className="product-horizontal__header">
          <div className="product-horizontal__header-left">
            <h3 className="product-horizontal__header-title">{props.title}</h3>
            <p className="product-horizontal__header-subtitle">
              {props.subtitle}
            </p>
          </div>
          <a href="#aaa" className="product-horizontal__header-btn">
            View all
          </a>
        </div>
        <div className="product-horizontal__content ">
          <Swiper
            ref={sliderRef}
            breakpoints={{
              1200: {
                slidesPerView: 5,
                slidesPerGroup: products?.length >= 5 ? 5 : products?.length,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: products?.length >= 4 ? 4 : products?.length,
              },
              550: {
                slidesPerView: 3,
                slidesPerGroup: products?.length >= 3 ? 3 : products?.length,
              },
              250: {
                slidesPerView: 2,
                slidesPerGroup: products?.length >= 2 ? 2 : products?.length,
              },
            }}
            spaceBetween={0}
            autoplay={{ delay: 5000 }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation]}
            className="mySwiper">
            {products &&
              products?.map((product) => {
                return (
                  <SwiperSlide key={product?.id_product}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}

            <div className="prev-arrow" onClick={handlePrev}>
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="next-arrow" onClick={handleNext}>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontal;
