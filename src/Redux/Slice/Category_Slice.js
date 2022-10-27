import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "categories",
  initialState: {
    categories: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllCategoriesStart: (state) => {
      state.loading = true;
      state.message = null;
    },
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllCategoriesFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
