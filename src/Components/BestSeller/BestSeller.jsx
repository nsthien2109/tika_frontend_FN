import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import imgProduct from "../../Assets/imgProduct.jpg";
import "./BestSeller.scss";

const BestSeller = (props) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="best-seller">
      <div className="best-seller__container">
        <div className="best-seller__header">
          <div className="best-seller__header-left">
            <h3 className="best-seller__header-title">Best seller</h3>
            <p className="best-seller__header-subtitle">
              Do not miss the current offers until the end of month.
            </p>
          </div>
          <a href="#aaa" className="best-seller__header-btn">
            View all
          </a>
        </div>
        <div className="best-seller__content">
          <Swiper
            ref={sliderRef}
            breakpoints={{
              1200: {
                // width: 576,
                slidesPerView: 5,
              },
              768: {
                // width: 768,
                slidesPerView: 4,
              },
              450: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={0}
            slidesPerGroup={3}
            autoplay={{ delay: 5000 }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
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

export default BestSeller;
