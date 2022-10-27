import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import storeDemo from "../../Assets/storeDem.jpg";
import "./SlideShow.scss";

// Import banner Selector
import { bannerSelector } from "../../Redux/selector";

import { serverNetwork } from "../../Services/utils/value";

const SlideShow = (props) => {
  const banners = useSelector(bannerSelector);
  SwiperCore.use([Autoplay]);
  return (
    <div className="slideshow">
      <div className="slideshow__body">
        <Swiper className="mySwiper" autoplay={{ delay: 3000 }}>
          {banners &&
            banners.map((slide) => {
              return (
                <SwiperSlide key={slide.id_banner}>
                  <div className="slideshow-item">
                    <img
                      src={`${serverNetwork}/${slide.bannerImage}`}
                      className="slide-img"
                      alt="Slide"
                    />
                    <div className="slideshow-item-content">
                      <h3>{slide.bannerDescription} !</h3>
                      <p>Only this week, Don't miss ...</p>
                      <p className="slideshow-item-content-price">
                        from <span>$20.0</span>
                      </p>
                      <Link to="shop" className="btn-shop">
                        Shop now <i className="ri-arrow-drop-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
