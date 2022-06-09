import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productDetail: { product: {} },
  stateModal: {
    modal: false,
  },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    actionModal: (state, action) => {
      state.stateModal = action.payload;
    },
  },
});
export const { actionProductDetail, actionModal } = appSlice.actions;

export default appSlice.reducer;
