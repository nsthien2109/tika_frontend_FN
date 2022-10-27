import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Import slice
import UI_Slice from "./Slice/UI_Slice";
import Auth_Slice from "./Slice/Auth_Slice";
import Banner_Slice from "./Slice/Banner_Slice";
import Category_Slice from "./Slice/Category_Slice";
import Store_Slice from "./Slice/Store_Slice";
import Product_Slice from "./Slice/Product_Slice";
import Detail_Slice from "./Slice/Detail_Slice";
import SubCategory_Slice from "./Slice/SubCategory_Slice";
import FilterProduct_Slice from "./Slice/FilterProduct_Slice";
import Favorite_Slice from "./Slice/Favorite_Slice";
import ProductInfo_Slice from "./Slice/ProductInfo_Slice";
import Cart_Slice from "../Redux/Slice/Cart_Slice";

const rootReducer = combineReducers({
  UI: UI_Slice.reducer,
  auth: Auth_Slice.reducer,
  banners: Banner_Slice.reducer,
  categories: Category_Slice.reducer,
  stores: Store_Slice.reducer,
  products: Product_Slice.reducer,
  detail: Detail_Slice.reducer,
  sub_categories: SubCategory_Slice.reducer,
  filter: FilterProduct_Slice.reducer,
  favorites: Favorite_Slice.reducer,
  productInfo: ProductInfo_Slice.reducer,
  cart: Cart_Slice.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
