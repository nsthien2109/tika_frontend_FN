import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "detail",
  initialState: {
    product: null,
    images: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getProductStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getProductSuccess: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getProductFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },

    getImageStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getImageSuccess: (state, action) => {
      state.images = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getImageFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
