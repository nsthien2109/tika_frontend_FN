import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      success: false,
      loading: false,
      error: false,
    },
    register: {
      loading: false,
      error: false,
      success: false,
    },
    message: null,
  },
  reducers: {
    loginStart: (state, action) => {
      state.login.loading = true;
      state.message = action.payload;
    },
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.login.error = false;
      state.register.success = true;
      state.login.currentUser = action.payload;
      state.message = null;
    },
    loginFailure: (state, action) => {
      state.login.loading = false;
      state.register.success = false;
      state.login.error = true;
      state.message = action.payload;
    },

    registerStart: (state, action) => {
      state.register.loading = true;
      state.register.error = false;
      state.message = null;
    },
    registerSuccess: (state, action) => {
      state.register.loading = false;
      state.register.success = true;
      state.register.error = false;
      state.message = action.payload;
    },
    registerFailure: (state, action) => {
      state.register.loading = false;
      state.register.success = false;
      state.register.error = true;
      state.message = action.payload;
    },
  },
});
