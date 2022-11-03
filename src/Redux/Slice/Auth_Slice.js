import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    success: false,
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    loginStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.currentUser = action.payload;
      state.message = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },

    registerStart: (state, action) => {
      state.loading = true;
      state.error = false;
      state.message = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },

    updateStart: (state, action) => {
      state.loading = true;
      state.error = false;
      state.message = action.payload;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },

    logoutStart: (state, action) => {
      state.loading = true;
      state.error = false;
      state.message = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
