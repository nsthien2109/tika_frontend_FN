import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideShopItem from "../SlideShopItem/SlideShopItem";
import { storeSelector } from "../../Redux/selector";
import "./SlideShop.scss";
import { Navigation } from "swiper";

const SlideShop = (props) => {
  const stores = useSelector(storeSelector);
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
    <div className="slideshop">
      <div className="slideshop__container">
        <div className="slideshop__header">
          <div className="slideshop__header-left">
            <h3 className="slideshop__header-title">Stores</h3>
            <p className="slideshop__header-subtitle">Taki Weekend Discount.</p>
          </div>
          <a href="#aaa" className="slideshop__header-btn">
            View all
          </a>
        </div>
        <div className="slideshop__content">
          <Swiper
            ref={sliderRef}
            breakpoints={{
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            slidesPerGroup={3}
            autoplay={{ delay: 5000 }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation]}
            className="mySwiper">
            {stores &&
              stores.map((store) => {
                return (
                  <SwiperSlide>
                    <SlideShopItem store={store} />
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

export default SlideShop;
