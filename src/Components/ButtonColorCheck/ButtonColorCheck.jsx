import React, { useState } from "react";
import "./ButtonColorCheck.scss";
const ButtonColorCheck = (props) => {
  return (
    <div
      className="btn-color-check"
      onClick={props.onClick}
      style={{ backgroundColor: props.colorHex }}>
      <p className="btn-color-check__label">{props.colorName}</p>
      <div
        className={`btn-color-check__selected w-full h-full ${
          props.selected ? "block" : "hidden"
        } absolute`}>
        <div className="btn-color-check__selected-content w-full h-full relative">
          <i className="ri-check-line absolute top-0 -right-0"></i>
        </div>
      </div>
    </div>
  );
};

export default ButtonColorCheck;
