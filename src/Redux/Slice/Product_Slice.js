import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "products",
  initialState: {
    products: null,
    images: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllProductStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getAllProductSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllProductFailure: (state, action) => {
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
