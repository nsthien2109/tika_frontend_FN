import React from "react";
import "./Filter.scss";
import { Checkbox, Slider } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import bannerStabuck from "../../Assets/milktea.gif";
import saleBanner from "../../Assets/shop_sale.gif";
import furnitureBanner from "../../Assets/furniture.gif";

const Filter = (props) => {
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const handleStyle = { color: 202435 };

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Men Clothes" },
    { label: "Woman Clothes", value: "Woman Clothes" },
    { label: "Orange", value: "Kids" },
    { label: "Orange", value: "Spring" },
    { label: "Woman Clothes", value: "Summer" },
    { label: "Orange", value: "Orange" },
    { label: "Orange", value: "Orange" },
    { label: "Woman Clothes", value: "Orange" },
    { label: "Orange", value: "Orange" },
    { label: "Woman Clothes", value: "Orange" },
  ];

  return (
    <div className="filter">
      <div className="filter__container">
        <div className="filter__category">
          <h3 className="filter__category-label">Product categories</h3>
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
        </div>
        <div className="filter__price">
          <h3 className="filter__price-label">Filter by price</h3>
          <div className="filter__price-content">
            <Slider className="invisible" />
            <Slider range defaultValue={[20, 50]} />
            <div className="filter__price-content-sub">
              <p className="filter__price-content-sub-text">
                Price from : <span>$20 - $76</span>
              </p>
              <div className="filter__price-content-sub-btn">Filter</div>
            </div>
          </div>
        </div>
        <div className="filter__brand">
          <h3 className="filter__brand-label">Brands</h3>
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
        </div>
        <div className="filter__banner">
          <img src={bannerStabuck} alt="" />
          <img src={saleBanner} alt="" />
          <img src={furnitureBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
