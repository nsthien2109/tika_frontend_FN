import React, { useEffect } from "react";
import "./Filter.scss";
import { Checkbox, Slider } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

import bannerStabuck from "../../Assets/milktea.gif";
import saleBanner from "../../Assets/shop_sale.gif";
import furnitureBanner from "../../Assets/furniture.gif";
import { useDispatch, useSelector } from "react-redux";
import FilterProduct_Slice from "../../Redux/Slice/FilterProduct_Slice";
import { subCategorySelected } from "../../Redux/selector";

const Filter = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FilterProduct_Slice.actions.filterSubCategoryChange([]));
  }, []);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(
      FilterProduct_Slice.actions.filterSubCategoryChange([...checkedValues])
    );
    console.log("checked = ", checkedValues);
  };

  const handleStyle = { color: 202435 };

  const options = [
    ...props.subCategories?.map((sub) => {
      return { label: sub.subCategoryName, value: sub.id_sub_category };
    }),
  ];

  return (
    <div className="filter">
      <div className="filter__container">
        <div className="filter__category">
          <h3 className="filter__category-label">Product categories</h3>
          <Checkbox.Group options={options} onChange={onChange} />
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
