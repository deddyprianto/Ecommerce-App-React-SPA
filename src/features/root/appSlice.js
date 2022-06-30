import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productDetail: { product: {} },
  stateModal: {
    modal: false,
  },
  dataUser: {
    user: { name: "deddy" },
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
    actionSaveDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});
export const { actionProductDetail, actionModal, actionSaveDataUser } =
  appSlice.actions;

export default appSlice.reducer;
