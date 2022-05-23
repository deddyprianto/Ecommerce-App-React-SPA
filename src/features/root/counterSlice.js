import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: {
    val: [],
  },
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    actionCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export const { actionCart } = counterSlice.actions;

export default counterSlice.reducer;
