import React, { useState, useEffect } from "react";
import { notification, Space } from "antd";
import "./ProductCard.scss";
import { Link, useNavigate } from "react-router-dom";
import ModalCustom from "../Modal/ModalCustom";
import DetailContentModal from "../DetailContentModal/DetailContentModal";
import ButtonSizeCheck from "../../Components/ButtonSizeCheck/ButtonSizeCheck";
import ButtonColorCheck from "../../Components/ButtonColorCheck/ButtonColorCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import { Checkbox } from "antd";
import Button from "../../Components/Button/Button";
import DetailTabs from "../../Components/DetailTabs/DetailTabs";
import RelatedProduct from "../../Components/RelatedProduct/RelatedProduct";
import "swiper/css/effect-cards";
import { serverNetwork } from "../../Services/utils/value";
import { EffectCards } from "swiper";
import {
  getDetailProduct,
  getImagesProduct,
} from "../../Services/DetailRequest";

import { addFavorite, unFavorite } from "../../Services/FavoriteRequest";
import { loginSelector, favoriteSelector } from "../../Redux/selector";

import { useDispatch, useSelector } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(loginSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);
  const [idFavorite, setIdFavorite] = useState(null);
  const yourFavoriteList = useSelector(favoriteSelector);
  const handleSizeSelected = (value) => {
    setSelected(value);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddFavorite = () => {
    const favoriteData = {
      id_product: props.product?.id_product,
    };
    if (userData?.accessToken === undefined) {
      navigate("/auth");
    } else {
      addFavorite(favoriteData, dispatch, userData?.accessToken).then(() => {
        notification["success"]({
          message: `${props.product?.productName}`,
          description: "Add to favorite has success.",
        });
      });
    }
  };

  const handleUnFavorite = () => {
    if (userData?.accessToken === undefined) {
      navigate("/auth");
    } else {
      unFavorite(idFavorite, dispatch, userData?.accessToken).then(() => {
        setIsFavorite(false);
        setIdFavorite();
        notification["success"]({
          message: `${props.product?.productName}`,
          description: "Remove product from favorite success.",
        });
      });
    }
  };

  useEffect(() => {
    if (userData) {
      yourFavoriteList?.map((item) => {
        if (item.id_product == props.product?.id_product) {
          setIsFavorite(true);
          setIdFavorite(item.id_favorite);
        }
      });
    }
  }, [yourFavoriteList]);

  var price = props.product?.productPrice;
  var flashSaleDiscount = props.product?.salePercent ?? 0;
  var discountPercent =
    flashSaleDiscount > 0 ? flashSaleDiscount : props.product?.discount;
  var salePrice =
    flashSaleDiscount > 0
      ? props.product?.productPrice -
        props.product?.productPrice * (flashSaleDiscount / 100)
      : props.product?.productPrice -
        props.product?.productPrice * (props.product?.discount / 100);

  return (
    <div className="product-card">
      <div className="product-card__container">
        <div className="product-img">
          <img
            src={`${serverNetwork}/${props.product?.productImage}`}
            width="80%"
            alt=""
          />
          <span
            className={`product-img-percent ${
              discountPercent > 0 ? "" : "hidden"
            }`}>
            {discountPercent | 0}%
          </span>
          <div
            className="product-img-more"
            onClick={(event) => event.stopPropagation()}>
            <div className="view-detail-btn" onClick={handleModal}>
              <i className="ri-drag-move-fill"></i>
            </div>
            <div
              className={`favorite-btn ${
                isFavorite
                  ? "bg-[#233a95] text-white"
                  : "bg-white hover:bg-[#233a95] text-[#233a95] hover:text-white"
              }`}
              onClick={isFavorite ? handleUnFavorite : handleAddFavorite}>
              {isFavorite ? (
                <i className="ri-heart-3-fill"></i>
              ) : (
                <i className="ri-heart-3-line"></i>
              )}
            </div>
          </div>
        </div>
        <Link
          to={`/detail/${props.product?.id_product}`}
          className="product-info block cursor-pointer">
          <div to="/detail" className="product-info-name">
            {props.product?.productName}
          </div>
          <span className="status">in stock</span>
          <div className="product-info-star">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
            <span className="star-num">4</span>
          </div>
          <div className="product-info-price">
            <span className="price">${price}</span>
            <span className="sale-price">${salePrice}</span>
          </div>
        </Link>
        <div className="product-overlay">
          <div className="product-info-cart-btn" onClick={handleModal}>
            Add to cart
          </div>
        </div>
      </div>
      <ModalCustom
        title="Blueberries – 1 Pint Package"
        isOpenModal={isModalOpen}
        handleModal={handleModal}>
        <DetailContentModal handleModal={handleModal} product={props.product} />
      </ModalCustom>
    </div>
  );
};

export default ProductCard;
