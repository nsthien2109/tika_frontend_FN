import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "productInfo",
  initialState: {
    productInfo: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getProductInfoStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getProductInfoSucess: (state, action) => {
      state.productInfo = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getProductInfoFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
