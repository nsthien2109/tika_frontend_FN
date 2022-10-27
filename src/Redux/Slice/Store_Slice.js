import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "stores",
  initialState: {
    stores: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllStoreStart: (state) => {
      state.loading = true;
      state.message = null;
    },
    getAllStoreSuccess: (state, action) => {
      state.stores = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllStoreFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
