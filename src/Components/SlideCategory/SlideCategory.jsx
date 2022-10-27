import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import catedemo from "../../Assets/catedemo.jpg";
import "./SlideCategory.scss";

import { categorySelector } from "../../Redux/selector";
import { serverNetwork } from "../../Services/utils/value";
import { Link } from "react-router-dom";

const SlideCategory = (props) => {
  const categories = useSelector(categorySelector);
  SwiperCore.use([Autoplay]);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const setCategoryId = (id) => {
    props.setCategory(id);
  };

  return (
    <div className="slide-category">
      <div className="slide-category__container">
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
          autoplay={{ delay: 8000 }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}
          className="mySwiper">
          {categories &&
            categories?.map((category) => {
              return (
                <SwiperSlide key={category.id_category}>
                  <Link
                    onClick={() => setCategoryId(category.id_category)}
                    to={`/shop/category-${category.id_category}`}
                    className="slide-category__item">
                    <div className="slide-category__item-img">
                      <img
                        src={`${serverNetwork}/${category.categoryImage}`}
                        alt=""
                      />
                    </div>
                    <div className="slide-category__item-info">
                      <h5>{category.categoryName}</h5>
                      <p>7 items</p>
                    </div>
                  </Link>
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
  );
};

export default SlideCategory;
