import React, { useState } from "react";
import "./ButtonSizeCheck.scss";
const ButtonSizeCheck = (props) => {
  return (
    <div className="btn-size-check">
      <p className="btn-size-check__label">{props.label}</p>
      <div
        className={`btn-size-check__selected w-full h-full ${
          props.selected ? "block" : "hidden"
        } absolute`}>
        <div className="btn-size-check__selected-content w-full h-full relative">
          <i className="ri-check-line absolute top-0 -right-0"></i>
        </div>
      </div>
    </div>
  );
};

export default ButtonSizeCheck;
