import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productDetail: { product: {} },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
export const { actionProductDetail } = appSlice.actions;

export default appSlice.reducer;
