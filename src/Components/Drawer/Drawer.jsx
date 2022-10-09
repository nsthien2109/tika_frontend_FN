import React, { useState } from "react";
import { Col, Row } from "antd";
import { Dropdown, Menu, Divider } from "antd";
import "./Drawer.scss";

const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

function Drawer(props) {
  const [showCate, setShowCate] = useState(false);
  const showCategory = () => {
    setShowCate(!showCate);
  };

  const closeDrawer = (e) => {
    e.stopPropagation();
    props.showDrawer();
  };
  return (
    <div
      className={`drawer ${props.drawer ? "" : "fade-out"}`}
      onClick={closeDrawer}>
      <div
        className={`drawer__container ${
          props.drawer ? "fade-in-left" : "fade-out-left"
        }`}
        onClick={(event) => event.stopPropagation()}>
        <div className="drawer__header">
          <div className="drawer__header-logo">Tika</div>
          <div className="drawer__header-close" onClick={closeDrawer}>
            <i className="ri-close-fill"></i>
          </div>
        </div>
        <div className="drawer__content">
          <div className="drawer__content-category">
            <div
              onClick={showCategory}
              className="drawer__content-category-show">
              <div className="drawer__content-category-show-icon">
                <i className="ri-menu-line"></i>
              </div>
              <div className="drawer__content-category-show-text">
                All Categories
              </div>
              <div className="drawer__content-category-show-icon">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div
              className={`drawer__content-category-list ${
                showCate ? "slide-top-in" : "hidden"
              }`}>
              <Row>
                <Col span={24}>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <div
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}>
                      <p>Vegetable</p>
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </Dropdown>
                </Col>
                <Col span={24}>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <div
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}>
                      <p>Vegetable</p>
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </Dropdown>
                </Col>
                <Col span={24}>
                  <div className="dropdown-item">
                    <p>Vegetable</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Divider />
          <div className="drawer__content-nav">
            <div className="drawer__content-nav-item">
              <div className="drawer__content-nav-item-text">Home</div>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <Divider style={{ margin: "10px" }} />
            <div className="drawer__content-nav-item">
              <div className="drawer__content-nav-item-text">Shop</div>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <Divider style={{ margin: "10px" }} />
            <div className="drawer__content-nav-item">
              <div className="drawer__content-nav-item-text">Contact</div>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
