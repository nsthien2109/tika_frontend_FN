import { useState } from "react";
import Header from "../Components/Header/Header";
import MobileNavigator from "../Components/MobileNavigator/MobileNavigator";
import Drawer from "../Components/Drawer/Drawer";
import Footer from "../Components/Footer/Footer";
import HomePage from "./Home/HomePage";
import ShopPage from "./Shop/ShopPage";
import AuthenticatePage from "./Auth/AuthenticatePage";
import DetailPage from "./Detail/DetailPage";
import ProfilePage from "./Profile/ProfilePage";
import CartPage from "./Cart/CartPage";
import CheckoutPage from "./Checkout/CheckoutPage";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openDrawerSelector } from "../Redux/selector";
import UI_Slice from "../Redux/Slice/UI_Slice";
import "./App.scss";

const App = () => {
  /** Call to redux */
  const dispatch = useDispatch();
  const drawer = useSelector(openDrawerSelector);
  const showDrawer = () => {
    dispatch(UI_Slice.actions.openDrawer());
  };
  /** End call to redux */
  return (
    <div className="App">
      <div className="App__container">
        <Header drawer={drawer} showDrawer={showDrawer} />
        <Drawer drawer={drawer} showDrawer={showDrawer} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/auth" element={<AuthenticatePage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
        <MobileNavigator />
        <Footer />
      </div>
    </div>
  );
};

export default App;
