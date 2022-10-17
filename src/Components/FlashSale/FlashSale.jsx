import React from "react";
import Countdown from "react-countdown";
import ProductCard from "../ProductCard/ProductCard";
import "./FlashSale.scss";

const FlashSale = (props) => {
  const Completionist = () => (
    <span className="countdown-success">You are good to go!</span>
  );
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="countdown-time">
          <span className="countdown-time-hour">{hours}</span>
          <span> : </span>
          <span className="countdown-time-min">{minutes}</span>
          <span> : </span>
          <span className="countdown-time-sc">{seconds}</span>
        </span>
      );
    }
  };

  return (
    <div className="flashsale">
      <div className="flashsale__container">
        <div className="flashsale__header">
          <div className="flashsale__header-title">
            Shock price <span>to day !</span>
          </div>
          <div className="flashsale__header-countdown">
            <Countdown date={Date.now() + 500000} renderer={renderer} />
          </div>
        </div>
        <div className="flashsale__content">
          <div className="flashsale__content-container">
            <div className="flashsale__content-item">
              <ProductCard />
            </div>
            <div className="flashsale__content-item">
              <ProductCard />
            </div>
            <div className="flashsale__content-item">
              <ProductCard />
            </div>
            <div className="flashsale__content-item">
              <ProductCard />
            </div>
            <div className="flashsale__content-item">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
