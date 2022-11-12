import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartDiscount: [],
    coupon: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    resetState: (state) => {
      state.cart = null;
      state.coupon = null;
      state.cartDiscount = [];
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = null;
    },
    /** GET COUPON */
    checkCouponStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    checkCouponSuccess: (state, action) => {
      state.coupon = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    checkCouponFailure: (state, action) => {
      state.coupon = null;
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },

    /**Create */
    addCartStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    addCartSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    addCartFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Read */
    getAllCartStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getAllCartSuccess: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllCartFailure: (state, action) => {
      state.cart = null;
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Delete */
    deleteCartStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    deleteCartSuccess: (state, action) => {
      state.cart.data = state.cart.data?.filter(
        (item) => item.id_cart != action.payload
      );
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    deleteCartFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
