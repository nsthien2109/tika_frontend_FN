import React, { useState, useEffect } from "react";
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
  const [minPrice, setMinPrice] = useState(5);
  const [maxPrice, setMaxPrice] = useState(100);
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

  const onChangePrice = (value: number | [number, number]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    dispatch(FilterProduct_Slice.actions.filterStartPriceChange(minPrice));
    dispatch(FilterProduct_Slice.actions.filterEndPriceChange(maxPrice));
  };

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
            <Slider
              max={500}
              range
              defaultValue={[minPrice, maxPrice]}
              onChange={onChangePrice}
            />
            <div className="filter__price-content-sub">
              <p className="filter__price-content-sub-text">
                Price from :{" "}
                <span>
                  ${minPrice} - ${maxPrice}
                </span>
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
