import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div
      className={`tika__btn-big ${
        props.rounder ? "rounded-full" : "rounded-2xl"
      }`}>
      <div className="tika__btn-big-label">{props.label}</div>
    </div>
  );
};

export default Button;
