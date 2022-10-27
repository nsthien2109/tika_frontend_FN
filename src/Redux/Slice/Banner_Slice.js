import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "banners",
  initialState: {
    banners: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllBannerStart: (state) => {
      state.loading = true;
      state.message = null;
    },
    getAllBannerSucess: (state, action) => {
      state.banners = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllBannerFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
