import React from "react";
import SlideShow from "../../Components/SlideShow/SlideShow";
import FlashSale from "../../Components/FlashSale/FlashSale";
import SlideCategory from "../../Components/SlideCategory/SlideCategory";
import SlideShop from "../../Components/SlideShop/SlideShop";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import BestSeller from "../../Components/BestSeller/BestSeller";

const HomePage = (props) => {
  return (
    <>
      <SlideShow />
      <FlashSale />
      <SlideCategory />
      <BestSeller />
      <SlideShop />
      <HomeProducts />
    </>
  );
};

export default HomePage;
