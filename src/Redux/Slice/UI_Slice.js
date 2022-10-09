import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "UI",
  initialState: {
    openDrawer: false,
  },
  reducers: {
    openDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
  },
});
