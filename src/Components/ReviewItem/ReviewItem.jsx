import React from "react";
import "./ReviewItem.scss";
import userImg from "../../Assets/user.png";
import { Rate } from "antd";

const ReviewItem = (props) => {
  return (
    <div className="review-item">
      <div className="review-item-avatar">
        <img src={userImg} alt="" />
      </div>
      <div className="review-item-comment">
        <Rate value={props.rate} />
        <div className="review-item-user">
          {props.name} <span> - {props.time} </span>
        </div>
        <div className="review-item-comment-text">{props.comment}</div>
      </div>
    </div>
  );
};

export default ReviewItem;
