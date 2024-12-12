import { createSlice } from "@reduxjs/toolkit";
import reducer from "./productSlice";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const checkItem = state.cart.find(
        (item, i) => item.id === action.payload.id
      );
      if (checkItem) {
        checkItem.counter++;
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      } else {
        state.cart = [...state.cart, action.payload];
        state.totalPrice += action.payload.price;
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      state.totalQuantity -= action.payload.counter;
      state.totalPrice -= action.payload.price * action.payload.counter;
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    reduceITemCart: (state, action) => {
      const checkItem = state.cart.find(
        (item, i) => item.id === action.payload.id
      );
      if (checkItem.counter > 1) {
        checkItem.counter--;
        state.totalPrice -= action.payload.price;
        state.totalQuantity--;
      } else {
        state.totalQuantity -= action.payload.counter;
        state.totalPrice -= action.payload.price * action.payload.counter;
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, reduceITemCart } = cartSlice.actions;
export default cartSlice.reducer;
