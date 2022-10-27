import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "favorites",
  initialState: {
    favorites: null,
    loading: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    /**Create */
    addFavoriteStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    addFavoriteSuccess: (state, action) => {
      state.favorites?.data.push(action.payload);
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    addFavoriteFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Read */
    getAllFavoriteStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    getAllFavoriteSuccess: (state, action) => {
      state.favorites = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllFavoriteFailure: (state, action) => {
      state.favorites = null;
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Delete */
    deleteFavoriteStart: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    deleteFavoriteSuccess: (state, action) => {
      state.favorites.data = state.favorites.data?.filter(
        (item) => item.id_favorite != action.payload
      );
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    deleteFavoriteFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
