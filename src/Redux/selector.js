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

//Coupon Selector
export const couponSelector = (state) => state.cart.coupon?.data;
export const couponMessage = (state) => state.cart.message;

// Cart
export const cartSelector = (state) => state.cart.cart?.data;
export const cartDiscountSelector = (state) => state.cart.cartDiscount;
export const subTotalCart = createSelector(
  cartSelector,
  couponSelector,
  cartDiscountSelector,
  (cart, coupon, cartDiscount) => {
    const arrDiscount = []; // tạo ra một array lưu giá khi nhập mã giảm
    return cart?.reduce((accumulator, cartItem) => {
      const price =
        cartItem.productPrice -
        cartItem.productPrice * (cartItem.discount / 100); // lấy giá tiền sản phẩm (phải lấy vì một số sản phẩm có discount)
      if (coupon && coupon?.couponType === "global") {
        // nếu coupon code thuộc dạng global (tất cả các shop đều dùng được | cái này chỉ có quản lý hệ thống được thêm)
        const salePrice = price - price * (coupon?.couponPercent / 100); // tính số tiền được giảm
        const newSubTotal = accumulator + salePrice * cartItem.quantity; // lấy tổng
        const cartDiscountObject = {
          cartItem: cartItem,
          couponCode: coupon?.couponCode,
          discount: coupon?.couponPercent,
          totalCartItem: salePrice * cartItem.quantity,
        }; // tạo object lưu lại kết quả khi nhập mã giảm
        if (arrDiscount.length < 1) {
          // khi mảng lưu kết quả rỗng
          arrDiscount.push(cartDiscountObject); // thêm object này vào
        } else {
          // ngược lại
          if (
            arrDiscount.slice(-1)[0]?.cartItem?.id_product !=
            cartDiscountObject?.cartItem?.id_product
          ) {
            // nếu id product cuối của mảng mà khác với id_product của object thì thêm nó vào mảng
            arrDiscount.push(cartDiscountObject);
          }
        }
        cartDiscount = arrDiscount; // cho state bằng mảng để tiện lấy
        console.log(cartDiscount);
        return newSubTotal; // trả về kết quả
      } else if (coupon && coupon?.couponType === "store") {
        // nếu coupon thuộc dạng store thì chỉ dùng cho store tạo ra coupon này -> phần logic tương t
        if (coupon?.id_store === cartItem.id_store) {
          const salePrice = price - price * (coupon?.couponPercent / 100);
          const newSubTotal = accumulator + salePrice * cartItem.quantity;
          const cartDiscountObject = {
            cartItem: cartItem,
            couponCode: coupon?.couponCode,
            discount: coupon?.couponPercent,
            totalCartItem: salePrice * cartItem.quantity,
          };
          if (arrDiscount.length < 1) {
            arrDiscount.push(cartDiscountObject);
          } else {
            if (
              arrDiscount.slice(-1)[0]?.cartItem?.id_product !=
              cartDiscountObject?.cartItem?.id_product
            ) {
              arrDiscount.push(cartDiscountObject);
            }
          }
          cartDiscount = arrDiscount;
          console.log(cartDiscount);
          return newSubTotal;
        }
      }
      const cartDiscountObject = {
        cartItem: cartItem,
        couponCode: undefined,
        discount: undefined,
        totalCartItem: price * cartItem.quantity,
      };
      if (arrDiscount.length < 1) {
        arrDiscount.push(cartDiscountObject);
      } else {
        if (
          arrDiscount.slice(-1)[0]?.cartItem?.id_product !=
          cartDiscountObject?.cartItem?.id_product
        ) {
          arrDiscount.push(cartDiscountObject);
        }
      }
      cartDiscount = arrDiscount;
      console.log(cartDiscount);
      return accumulator + price * cartItem.quantity;
    }, 0);
  }
);

// Comment

export const commentSelector = (state) => state.comments.comments?.data;
export const commentMessageSelector = (state) => state.comments.message;

//Order
export const orderSelector = (state) => state.orders.orders?.data;

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
      return sub.id_category === category;
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
        products.id_category === category &&
        (subCategory.length
          ? products.id_sub_category === subCategory
          : true) &&
        products.productPrice >= startPrice &&
        products.productPrice <= endPrice
      );
    });
  }
);

export const flashsaleSelector = (state) => state.flashsale.flashsale?.data;

export const flashsaleProduct = createSelector(
  flashsaleSelector,
  (flashsales) => {
    const getDay = new Date();
    return flashsales?.filter((item) => {
      const day = new Date(item?.sale_day);
      const start = new Date(item?.sale_day + ":" + item?.start);
      const end = new Date(item?.sale_day + ":" + item?.end);
      return (
        day.getDate() === getDay.getDate() &&
        day.getMonth() === getDay.getMonth() &&
        day.getFullYear() === getDay.getFullYear() &&
        getDay >= start &&
        getDay <= end
      );
    });
  }
);
