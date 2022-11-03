import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "flashsale",
  initialState: {
    flashsale: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getFlashSaleStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getFlashSaleSuccess: (state, action) => {
      state.flashsale = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getFlashSaleFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
