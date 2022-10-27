import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "sub_categories",
  initialState: {
    sub_categories: null,
    categorySelected: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllSubCategoriesStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getAllSubCategoriesSuccess: (state, action) => {
      state.sub_categories = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllSubCategoriesFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    setCategorySelect: (state, action) => {
      state.categorySelected = action.payload;
    },
  },
});
