import { createSelector } from "reselect";

export const openDrawerSelector = (state) => state.UI.openDrawer;

/** Banners */
export const bannerSelector = (state) => state.banners.banners?.data;

/** Category */
export const categorySelector = (state) => state.categories.categories?.data;

/** Store */
export const storeSelector = (state) => state.stores.stores?.data;

/** Auth */
export const loginSelector = (state) => state.auth?.currentUser;
export const userInfoSelector = (state) => state.auth?.currentUser?.data;
export const messageAuthSelector = (state) => state.auth?.message;

/** Address */
export const addressSelector = (state) => state.address.address?.data;

/** Product */
export const productSelector = (state) => state.products.products?.data?.data;
export const imageProductSelector = (state) => state.products.images?.data;

/** Detail */
export const detailSelector = (state) => state.detail.product?.data;
export const detailImageSelector = (state) => state.detail.images?.data;

// Sub Category
export const subCategorySelector = (state) =>
  state.sub_categories.sub_categories?.data;

// Favorite
export const favoriteSelector = (state) => state.favorites.favorites?.data;

// Product info about size and colors
export const productSizeSelector = (state) =>
  state.productInfo.productInfo?.data?.sizes;
export const productColorSelector = (state) =>
  state.productInfo.productInfo?.data?.colors;

// Cart
export const cartSelector = (state) => state.cart.cart?.data;
//Coupon Selector
export const couponSelector = (state) => state.cart.coupon?.data;
export const couponMessage = (state) => state.cart.coupon?.message;

export const subTotalCart = createSelector(
  cartSelector,
  couponSelector,
  (cart, coupon) => {
    return cart?.reduce((accumulator, cartItem) => {
      const price =
        cartItem.productPrice -
        cartItem.productPrice * (cartItem.discount / 100);
      if (coupon && coupon?.couponType === "global") {
        const newSubTotal = accumulator + price * cartItem.quantity;
        return newSubTotal - newSubTotal * (coupon?.couponPercent / 100);
      } else if (coupon && coupon?.couponType === "store") {
        if (coupon?.id_store === cartItem.id_store) {
          const salePrice = price - price * (coupon?.couponPercent / 100);
          const newSubTotal = accumulator + salePrice * cartItem.quantity;
          return newSubTotal;
        }
      }
      return accumulator + price * cartItem.quantity;
    }, 0);
  }
);
/** FILTER */
export const categoryFilterSelected = (state) => state.filter.categorySelected;
export const storeFilterSelected = (state) => state.filter.storeSelected;
export const subCategorySelected = (state) => state.filter.subCategorySelected;
export const searchFilterSelector = (state) => state.filter.searchText ?? "";
export const brandFilterSelected = (state) => state.filter.brandSelected;
export const startPriceFilterSelected = (state) => state.filter.startPrice;
export const endPriceFilterSelected = (state) => state.filter.endPrice;

export const subCategoryByCategory = createSelector(
  subCategorySelector,
  categoryFilterSelected,
  (sub_categories, category) => {
    return sub_categories.filter((sub) => {
      return sub.id_category == category;
    });
  }
);

export const productListFilter = createSelector(
  productSelector,
  categoryFilterSelected,
  storeFilterSelected,
  subCategorySelected,
  searchFilterSelector,
  brandFilterSelected,
  startPriceFilterSelected,
  endPriceFilterSelected,
  (
    productList,
    category,
    store,
    subCategory,
    searchText,
    brand,
    startPrice,
    endPrice
  ) => {
    return productList.filter((products) => {
      return (
        products.productName.includes(searchText) &&
        products.id_category == category &&
        (subCategory.length ? products.id_sub_category == subCategory : true)
      );
    });
  }
);

export const flashsaleSelector = (state) => state.flashsale.flashsale?.data;

export const flashsaleProduct = createSelector(
  flashsaleSelector,
  (flashsales) => {
    const getDay = new Date();
    return flashsales.filter((item) => {
      const day = new Date(item?.sale_day);
      const start = new Date(item?.sale_day + ":" + item?.start);
      const end = new Date(item?.sale_day + ":" + item?.end);
      return (
        day.getDate() == getDay.getDate() &&
        day.getMonth() == getDay.getMonth() &&
        day.getFullYear() == getDay.getFullYear() &&
        getDay >= start &&
        getDay <= end
      );
    });
  }
);
