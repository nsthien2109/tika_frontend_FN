import React, { useState } from "react";
import "./DetailTabs.scss";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Tabs, Rate, Alert } from "antd";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { commentMessageSelector } from "../../Redux/selector";

const { TabPane } = Tabs;

const DetailTabs = (props) => {
  const [star, setStar] = useState(5);
  const [commentContent, setCommentContent] = useState();
  const comments = props.comments;
  const message = useSelector(commentMessageSelector);
  const addComment = () => {
    console.log(star);
    const commentData = {
      id_product: props.product?.id_product,
      star_rate: star,
      commentContent: commentContent,
    };
    props.handleAddComment(commentData);
  };
  return (
    <div className="detail-tabs">
      <Tabs size="100">
        <TabPane tab="Description" key="tab-a">
          <div className="description__content">
            {props.product?.productDescription}
          </div>
        </TabPane>
        <TabPane tab="Additianal infomation" key="tab-b">
          <div className="additonal-info__content">
            <div className="additonal-info__content-item">
              <p className="additonal-info__content-item__label">Category</p>
              <p className="additonal-info__content-item__value">
                {props.product?.categoryName}
              </p>
            </div>
            <div className="additonal-info__content-item">
              <p className="additonal-info__content-item__label">Brand</p>
              <p className="additonal-info__content-item__value">
                {props.product?.brandName}
              </p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Review(5)" key="tab-c">
          <div className="review__content">
            <div className="review__content-body">
              <h3 className="review__content-body-label">
                1 Review for All Natural Italian-Style Chicken Meatballs
              </h3>
              <div className="review__content-body-list">
                {comments?.length > 0 &&
                  comments?.map((comment) => {
                    return (
                      <ReviewItem
                        key={comment?.id_comment}
                        name={comment?.lastName}
                        time="A time ago"
                        rate={comment?.star_rate}
                        comment={comment?.commentContent}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="review__content-form">
              <h3 className="review__content-form-label">Add your comment</h3>
              <Alert
                message={message ? message : ``}
                className={message ? `my-5` : "hidden"}
                showIcon
                type="success"
              />
              <div className="review__content-form-rate">
                <label htmlFor="rate-star">Your rate</label>
                <Rate id="rate-star" onChange={setStar} />
              </div>
              <div className="review__content-form-write">
                <label htmlFor="comment_input">Your comment</label>
                <textarea
                  name=""
                  className="review__content-form-input"
                  id="comment_input"
                  value={commentContent}
                  onChange={(event) => setCommentContent(event.target.value)}
                  cols="30"
                  placeholder="Write your review here"
                  rows="10"></textarea>
              </div>
              <Button label="Comment" onClick={addComment} rounder={true} />
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DetailTabs;
