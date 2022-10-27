import { useState, useEffect } from "react";
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
import FilterProduct_Slice from "../Redux/Slice/FilterProduct_Slice";
import "./App.scss";

/** Import Request */
import { getBanners } from "../Services/BannerRequest";
import { getCategories } from "../Services/CategoryRequest";
import { getStores } from "../Services/StoreRequest";
import { getProducts } from "../Services/ProductRequest";
import { getSubCategories } from "../Services/SubCategoryRequest";
import { getFavorites } from "../Services/FavoriteRequest";
import { getCart } from "../Services/CartRequest";

import { loginSelector, userInfoSelector } from "../Redux/selector";

const App = () => {
  /** Call to redux */
  const dispatch = useDispatch();
  const drawer = useSelector(openDrawerSelector);
  const loginCheck = useSelector(loginSelector);
  const user = useSelector(userInfoSelector);
  const showDrawer = () => {
    dispatch(UI_Slice.actions.openDrawer());
  };

  /** Selected category to get sub category */
  const setCategory = (id_category) => {
    dispatch(FilterProduct_Slice.actions.filterCategoryChange(id_category));
  };

  /** End call to redux */
  useEffect(() => {
    document.title = "Tika - Buy genuine products";
    getBanners(dispatch);
    getCategories(dispatch);
    getStores(dispatch);
    getProducts(dispatch);
    getSubCategories(dispatch);
    if (loginCheck?.data != null) {
      getFavorites(user?.id, dispatch, loginCheck?.accessToken);
      getCart(dispatch, loginCheck?.accessToken);
    }
  }, [loginCheck]);

  return (
    <div className="App">
      <div className="App__container">
        <Header drawer={drawer} showDrawer={showDrawer} />
        <Drawer drawer={drawer} showDrawer={showDrawer} />
        <Routes>
          <Route path="/" element={<HomePage setCategory={setCategory} />} />
          <Route path="/shop/category-:id_category" element={<ShopPage />} />
          <Route path="/auth" element={<AuthenticatePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
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
