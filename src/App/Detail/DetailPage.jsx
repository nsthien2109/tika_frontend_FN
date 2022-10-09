import React, { useState } from "react";
import "./DetailPage.scss";
import ButtonSizeCheck from "../../Components/ButtonSizeCheck/ButtonSizeCheck";
import ButtonColorCheck from "../../Components/ButtonColorCheck/ButtonColorCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import { Checkbox } from "antd";
import Button from "../../Components/Button/Button";
import DetailTabs from "../../Components/DetailTabs/DetailTabs";
import RelatedProduct from "../../Components/RelatedProduct/RelatedProduct";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const DetailPage = (props) => {
  const [selected, setSelected] = useState("M");
  const handleSizeSelected = (value) => {
    setSelected(value);
  };

  return (
    <div className="detail-page">
      <div className="detail-page__container">
        <div className="detail-page__overview">
          <div className="detail-page__overview-name mb-3">
            All Natural Italian-Style Chicken Meatballs
          </div>
          <div className="detail-page__overview-meta flex justify-start items-center mb-4">
            <p className="sub-category text-xs mr-3">
              Product category :{" "}
              <span className="text-sm font-semibold">Man clothes</span>
            </p>
            <a
              href="#tab-c"
              className="mr-3 text-xs flex justify-center items-center">
              5 <i className="ri-star-fill mx-1 text-yellow-400"></i>3{" "}
              <span className="uppercase ml-1">Reviews</span>
            </a>
            <p className="brand text-xs">
              Brand : <span className="text-sm font-semibold">Chanel</span>
            </p>
          </div>
          <div className="row flex justify-between items-center mt-3">
            <div className="detail-page__overview-img w-1/2 lg:w-[40%]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
            <div className="detail-page__overview-info w-1/2 lg:w-[35%]">
              <div className="detail-page__overview-info-price">
                <div className="price">$9.35</div>
                <div className="sale-price">$7.21</div>
              </div>
              <div className="detail-page__overview-info-stock uppercase">
                In stock
              </div>
              <div className="detail-page__overview-size flex justify-start mt-3">
                <ButtonSizeCheck label="M" selected={selected} />
                <ButtonSizeCheck label="X" />
                <ButtonSizeCheck label="L" />
                <ButtonSizeCheck label="XL" />
                <ButtonSizeCheck label="XXL" />
              </div>
              <div className="detail-page__overview-color flex justify-start mt-3">
                <ButtonColorCheck colorName="Yellow" colorHex="#e6e645" />
                <ButtonColorCheck colorName="Black" colorHex="#000000" />
                <ButtonColorCheck
                  colorName="Brow"
                  colorHex="#633a00"
                  selected={selected}
                />
                <ButtonColorCheck colorName="Blue" colorHex="#001f91" />
              </div>
              <div className="detail-page__overview-add-cart">
                <div className="detail-page__overview-add-cart__counter">
                  <div className="remove">
                    <i className="ri-subtract-fill"></i>
                  </div>
                  <p className="amount">2</p>
                  <div className="add">
                    <i className="ri-add-fill"></i>
                  </div>
                </div>
                <div className="detail-page__overview-cart-btn">
                  <Button label="Add to cart" rounder={true} />
                </div>
              </div>
              <div className="detail-page__overview_wishlist">
                <div className="detail-page__overview_wishlist-btn flex justify-center items-center">
                  <i className="ri-heart-3-line"></i> Add to wishlist
                </div>
              </div>
              <div className="detail-page__overview-checklist py-4">
                <div className="detail-page__overview-checklist-item">
                  <i className="ri-check-line mr-2"></i> Category : Men Clothes
                </div>
                <div className="detail-page__overview-checklist-item">
                  <i className="ri-check-line mr-2"></i> Brand : Gucci Gang
                </div>
              </div>
              <hr className="my-5" />
              <div className="detail-page__overview-checklist-socials flex">
                <i className="ri-facebook-fill bg-blue-500"></i>
                <i className="ri-pinterest-fill bg-red-500"></i>
                <i className="ri-twitter-fill bg-blue-400"></i>
                <i className="ri-linkedin-fill bg-blue-800"></i>
                <i className="ri-whatsapp-fill bg-green-500"></i>
              </div>
            </div>
            <div className="detail-page__overview-more hidden lg:block lg:w[25%]">
              <div className="detail-page__overview-more-content">
                <div className="detail-page__overview-more-content-item flex">
                  <i className="ri-truck-line"></i>
                  <p>Free Shipping apply to all orders over $100</p>
                </div>
                <div className="detail-page__overview-more-content-item flex">
                  <i className="ri-leaf-line"></i>
                  <p>Guranteed 100% Organic from natural farmas</p>
                </div>
                <div className="detail-page__overview-more-content-item flex">
                  <i className="ri-money-dollar-circle-line"></i>
                  <p>1 Day Returns if you change your mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detai-page-description">
          <DetailTabs />
        </div>
        <div className="detail-page-related">
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
