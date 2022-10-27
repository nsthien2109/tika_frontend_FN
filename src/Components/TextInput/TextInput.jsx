import React from "react";
import "./TextInput.scss";
const TextInput = (props) => {
  return (
    <div className="custom-text-input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="input-text"
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
