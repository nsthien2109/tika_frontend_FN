import React from "react";
import Countdown from "react-countdown";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import "./FlashSale.scss";
import ProductHorizontal from "../ProductHorizontal/ProductHorizontal";

const FlashSale = (props) => {
  const flashsales = props.flashsales;
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

  console.log(flashsales);
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
        <ProductHorizontal
          title="Flashsale"
          subtitle="Do not miss the current offers on this time"
          redBorder={true}
          products={flashsales}
        />
      </div>
    </div>
  );
};

export default FlashSale;
