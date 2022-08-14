import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((item) => item.id === product.id);

      if (index === -1) {
        state.value.push(product);
      } else {
        state.value[index].quantity += 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
