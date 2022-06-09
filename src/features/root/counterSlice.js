import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    actionCart: (state, action) => {
      const detailProduct = action.payload;
      const findIdDetail = state.cart.find(
        (item) => item.id === detailProduct.id
      );
      if (findIdDetail) {
        state.cart = state.cart.map((a) =>
          a.id === detailProduct.id ? detailProduct : a
        );
      } else {
        state.cart = [...state.cart, detailProduct];
      }
    },
  },
});
export const { actionCart } = counterSlice.actions;

export default counterSlice.reducer;
