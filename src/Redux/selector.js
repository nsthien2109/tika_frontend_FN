import { createSelector } from "reselect";

export const openDrawerSelector = (state) => state.UI.openDrawer;

/** Banners */
export const bannerSelector = (state) => state.banners.banners?.data;

/** Category */
export const categorySelector = (state) => state.categories.categories?.data;

/** Store */
export const storeSelector = (state) => state.stores.stores?.data;

/** Auth */
export const loginSelector = (state) => state.auth.login?.currentUser;
export const userInfoSelector = (state) => state.auth.login?.currentUser?.data;
export const messageAuthSelector = (state) => state.auth?.message;

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
      ); //&&
      // (store ? products.id_store.includes(store) : true) &&
      // (subCategory.length
      //   ? products.id_sub_category.includes(subCategory)
      //   : true) &&
      // (brand.length ? products.id_brand.includes(brand) : true) &&
      // products.price >= startPrice &&
      // products.price <= endPrice
    });
  }
);

// export const productListFilter = createSelector(
//   productSelector,
//   categoryFilterSelected,
//   storeFilterSelected,
//   subCategorySelected,
//   searchFilterSelector,
//   brandFilterSelected,
//   startPriceFilterSelected,
//   endPriceFilterSelected,
//   (
//     products,
//     category,
//     store,
//     subCategory,
//     searchText,
//     brand,
//     startPrice,
//     endPrice
//   ) => {
//     console.log(category, searchText);
//     return (
//       products.productName.includes(searchText ?? "") &&
//       (category.length
//         ? products.id_category.includes(category ?? [])
//         : true) &&
//       (store ? products.id_store.includes(store ?? "") : true) &&
//       (subCategory.length
//         ? products.id_sub_category.includes(subCategory ?? [])
//         : true) &&
//       (brand.length ? products.id_brand.includes(brand ?? []) : true) &&
//       products.price >= startPrice &&
//       products.price <= endPrice
//     );
//   }
// );

// List product filter Select
// export const productFilterSelect = createSelector(
//   productSelector,
//   categorySelected,
//   subCategorySelector,
//   searchTextSelector,
//   brandSelector
// );
