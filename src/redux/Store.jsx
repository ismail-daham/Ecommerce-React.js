import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import prodictSlice from './productSlice';



const store =configureStore({
  reducer: {
    cart:cartSlice,
    product: prodictSlice
  }
})

export default store;