import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlideShow from "../../Components/SlideShow/SlideShow";
import FlashSale from "../../Components/FlashSale/FlashSale";
import SlideCategory from "../../Components/SlideCategory/SlideCategory";
import SlideShop from "../../Components/SlideShop/SlideShop";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import ProductHorizontal from "../../Components/ProductHorizontal/ProductHorizontal";

/** Import Selector */
import { flashsaleProduct } from "../../Redux/selector";

const HomePage = (props) => {
  const flashsales = useSelector(flashsaleProduct);
  return (
    <>
      <SlideShow />
      {flashsales?.length > 0 ? <FlashSale flashsales={flashsales} /> : null}
      <SlideCategory setCategory={props.setCategory} />
      <HomeProducts />
    </>
  );
};

export default HomePage;
