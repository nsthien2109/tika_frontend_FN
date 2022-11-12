import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "orders",
  initialState: {
    orders: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    resetState: (state) => {
      state.orders = null;
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = null;
    },
    // Get order
    getAllOrderStart: (state, action) => {
      state.loading = true;
      state.orders = null;
      state.message = action.payload;
    },
    getAllOrderSuccess: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllOrderFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Add Order */
    onOrderStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    onOrderSuccess: (state, action) => {
      state.orders?.data.push(action.payload);
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    onOrderFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
