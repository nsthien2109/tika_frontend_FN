import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "address",
  initialState: {
    address: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    resetState: (state) => {
      state.address = null;
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = null;
    },
    /**Create */
    updateAddressStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    updateAddressSuccess: (state, action) => {
      state.address = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    updateAddressFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Read */
    getAddressStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getAddressSuccess: (state, action) => {
      state.address = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAddressFailure: (state, action) => {
      state.address = null;
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
