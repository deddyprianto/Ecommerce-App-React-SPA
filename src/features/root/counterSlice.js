import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  priceTshirt: { value: 17.99 },
  priceHoodie: { value: 35.99 },
  qtyTshirt: 1,
  qtyHoodie: 1,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.priceTshirt.value += action.payload;
    },
    decrement: (state, action) => {
      state.priceHoodie.value -= action.payload;
    },
    icrementQtyTshirt: (state, action) => {
      state.qtyTshirt = action.payload;
    },
    icrementQtyHoodie: (state, action) => {
      state.qtyHoodie = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, icrementQtyTshirt, icrementQtyHoodie } =
  counterSlice.actions;

export default counterSlice.reducer;
