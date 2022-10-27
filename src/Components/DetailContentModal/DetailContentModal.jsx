import React, { useState, useEffect } from "react";
import "./DetailContentModal.scss";
import { useNavigate } from "react-router-dom";
import ButtonSizeCheck from "../ButtonSizeCheck/ButtonSizeCheck";
import ButtonColorCheck from "../ButtonColorCheck/ButtonColorCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import { Checkbox, notification } from "antd";
import Button from "../Button/Button";
import DetailTabs from "../DetailTabs/DetailTabs";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../Services/ImageRequest";
import { getProductInfo } from "../../Services/ProductInfoRequest";
import { addCart } from "../../Services/CartRequest";
import {
  imageProductSelector,
  productSizeSelector,
  productColorSelector,
  loginSelector,
} from "../../Redux/selector";

import { serverNetwork } from "../../Services/utils/value";

const DetailContentModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(loginSelector);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const handleSizeSelected = (value) => {
    setSizeSelected(value);
  };

  const handleColorSelected = (value) => {
    setColorSelected(value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAddCart = async () => {
    if (userData?.accessToken === undefined) {
      navigate("/auth");
    } else {
      const cartData = {
        id_product: props.product?.id_product,
        id_size: sizeSelected,
        id_color: colorSelected,
        quantity: quantity,
      };
      await addCart(cartData, dispatch, userData?.accessToken).then(() => {
        notification["success"]({
          message: `${props.product?.productName}`,
          description: "Added to cart.",
        });
      });
      props.handleModal();
    }
  };

  const sizes = useSelector(productSizeSelector);
  const colors = useSelector(productColorSelector);

  useEffect(() => {
    getImages(props.product?.id_product, dispatch);
    getProductInfo(props.product?.id_product, dispatch);
  }, []);

  const images = useSelector(imageProductSelector);

  var price = props.product?.productPrice;
  var salePrice =
    props.product?.productPrice -
    props.product?.productPrice * (props.product?.discount / 100);

  return (
    <div className="detail-modal">
      <div className="detail-modal__container">
        <div className="detail-modal__overview">
          <div className="detail-modal__overview-name mb-3">
            {props.product?.productName}
          </div>
          <div className="detail-modal__overview-meta flex justify-start items-center mb-4">
            <p className="sub-category text-xs mr-3">
              Product category :{" "}
              <span className="text-sm font-semibold">
                {props.product?.categoryName}
              </span>
            </p>
            <a
              href="#tab-c"
              className="mr-3 text-xs flex justify-center items-center">
              5 <i className="ri-star-fill mx-1 text-yellow-400"></i>3{" "}
              <span className="uppercase ml-1">Reviews</span>
            </a>
            <p className="brand text-xs">
              Brand :{" "}
              <span className="text-sm font-semibold">
                {props.product?.brandName}
              </span>
            </p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center mt-3">
            <div className="detail-modal__overview-img w-full md:w-1/2 mb-5 lg:w-[50%]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                {images &&
                  images.map((img) => {
                    return (
                      <SwiperSlide key={img.id_image}>
                        <img
                          src={`${serverNetwork}/${img.url}`}
                          alt=""
                          className="img-product w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="detail-modal__overview-info w-full md:w-1/2 lg:w-[50%]">
              <div className="detail-modal__overview-info-price">
                <div className="price">${price}</div>
                <div className="sale-price">${salePrice}</div>
              </div>
              <div className="detail-modal__overview-info-stock uppercase">
                In stock
              </div>
              <div className="detail-modal__overview-size flex justify-start mt-3">
                {sizes?.length > 0 &&
                  sizes.map((size) => {
                    return (
                      <ButtonSizeCheck
                        label={size.sizeName}
                        onClick={() => handleSizeSelected(size.id_size)}
                        selected={size.id_size == sizeSelected ? true : false}
                      />
                    );
                  })}
              </div>
              <div className="detail-modal__overview-color flex justify-start mt-3">
                {colors?.length > 0 &&
                  colors.map((color) => {
                    return (
                      <ButtonColorCheck
                        colorName={color.colorName}
                        colorHex={`#${color.colorHex}`}
                        onClick={() => handleColorSelected(color.id_color)}
                        selected={
                          color.id_color == colorSelected ? true : false
                        }
                      />
                    );
                  })}
              </div>
              <div className="detail-modal__overview-add-cart">
                <div className="detail-modal__overview-add-cart__counter">
                  <div className="remove" onClick={decrementQuantity}>
                    <i className="ri-subtract-fill"></i>
                  </div>
                  <p className="amount">{quantity}</p>
                  <div className="add" onClick={incrementQuantity}>
                    <i className="ri-add-fill"></i>
                  </div>
                </div>
                <div className="detail-modal__overview-cart-btn">
                  <Button
                    label="Add to cart"
                    onClick={handleAddCart}
                    rounder={true}
                  />
                </div>
              </div>
              <div className="detail-modal__overview_wishlist">
                <div className="detail-modal__overview_wishlist-btn flex justify-center items-center">
                  <i className="ri-heart-3-line"></i> Add to wishlist
                </div>
              </div>
              <div className="detail-modal__overview-checklist py-4">
                <div className="detail-modal__overview-checklist-item">
                  <i className="ri-check-line mr-2"></i> Category :{" "}
                  {props.product?.subCategoryName}
                </div>
                <div className="detail-modal__overview-checklist-item">
                  <i className="ri-check-line mr-2"></i> Brand :{" "}
                  {props.product?.brandName}
                </div>
              </div>
              <hr className="my-5" />
              <div className="detail-modal__overview-checklist-socials flex">
                <i className="ri-facebook-fill bg-blue-500"></i>
                <i className="ri-pinterest-fill bg-red-500"></i>
                <i className="ri-twitter-fill bg-blue-400"></i>
                <i className="ri-linkedin-fill bg-blue-800"></i>
                <i className="ri-whatsapp-fill bg-green-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContentModal;
