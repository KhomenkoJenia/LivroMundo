import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingCartItemIndex !== -1) {
        if (state.items[existingCartItemIndex].quantity === 1) {
          state.items.splice(existingCartItemIndex, 1);
        } else {
          state.items[existingCartItemIndex].quantity -= 1;
        }
      }
    },
    clearItemCompletely(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, clearItemCompletely } = cartSlice.actions;

export default cartSlice.reducer;
