import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: { products: [] },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { actionProduct, actionDrawer } = appSlice.actions;

export default appSlice.reducer;
