import React from "react";
import "./DetailTabs.scss";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Tabs, Rate } from "antd";
import Button from "../Button/Button";

const { TabPane } = Tabs;

const DetailTabs = (props) => {
  return (
    <div className="detail-tabs">
      <Tabs size="100">
        <TabPane tab="Description" key="tab-a">
          <div className="description__content">
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
            auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim
            viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus
            sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit
            amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur
            laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim
            ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
            orci convallis quam, sit amet consequat nulla felis pharetra lacus.
            Duis semper erat mauris, sed egestas purus commodo vel.
          </div>
        </TabPane>
        <TabPane tab="Additianal infomation" key="tab-b">
          <div className="additonal-info__content">
            <div className="additonal-info__content-item">
              <p className="additonal-info__content-item__label">Category</p>
              <p className="additonal-info__content-item__value">Man Clothes</p>
            </div>
            <div className="additonal-info__content-item">
              <p className="additonal-info__content-item__label">Brand</p>
              <p className="additonal-info__content-item__value">Gucci Gang</p>
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
                <ReviewItem
                  name="Shi Tian"
                  time="21-09-2019"
                  rate="5"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Cu Shin"
                  time="22-06-2022"
                  rate="4"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Dau Cat Moi"
                  time="04-03-2020"
                  rate="5"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Kha Banh"
                  time="13-02-2018"
                  rate="3"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Kha Banh"
                  time="13-02-2018"
                  rate="3"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Kha Banh"
                  time="13-02-2018"
                  rate="3"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Kha Banh"
                  time="13-02-2018"
                  rate="3"
                  comment="This is good coat"
                />
                <ReviewItem
                  name="Kha Banh"
                  time="13-02-2018"
                  rate="3"
                  comment="This is good coat"
                />
              </div>
            </div>
            <div className="review__content-form">
              <h3 className="review__content-form-label">Add your comment</h3>
              <div className="review__content-form-rate">
                <label htmlFor="rate-star">Your rate</label>
                <Rate id="rate-star" />
              </div>
              <div className="review__content-form-write">
                <label htmlFor="comment_input">Your comment</label>
                <textarea
                  name=""
                  className="review__content-form-input"
                  id="comment_input"
                  cols="30"
                  placeholder="Write your review here"
                  rows="10"></textarea>
              </div>
              <Button label="Comment" rounder={true} />
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DetailTabs;
