import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "comments",
  initialState: {
    comments: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    getAllCommentStart: (state, action) => {
      state.comments = null;
      state.loading = true;
      state.message = action.payload;
    },
    getAllCommentSuccess: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllCommentFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    //

    addCommentStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    addCommentSuccess: (state, action) => {
      state.comments?.data.push(action.payload);
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    addCommentFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
