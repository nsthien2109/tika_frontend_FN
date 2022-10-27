import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    categorySelected: [],
    storeSelected: null,
    subCategorySelected: [],
    searchText: "",
    brandSelected: [],
    startPrice: 0.0,
    endPrice: 300.0,
  },
  reducers: {
    filterSearchChange: (state, action) => {
      state.searchText = action.payload;
    },
    filterStoreChange: (state, action) => {
      state.storeSelected = action.payload;
    },
    filterCategoryChange: (state, action) => {
      state.categorySelected = action.payload;
    },
    filterSubCategoryChange: (state, action) => {
      state.subCategorySelected = action.payload;
    },
    filterBrandChange: (state, action) => {
      state.brandSelected = action.payload;
    },
    filterStartPriceChange: (state, action) => {
      state.startPrice = action.payload;
    },
    filterEndPriceChange: (state, action) => {
      state.endPrice = action.payload;
    },
  },
});
