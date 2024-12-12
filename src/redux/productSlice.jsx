import { createSlice } from "@reduxjs/toolkit";
import { mocData } from "../assets/MocData";

const initialState= {
  products: mocData,
  searchItem:"",
  productfilter:[],
}

const ProductSlice = createSlice({
  name: 'prodeucts',
  initialState,
  reducers :{
    setProducts(state , action){
      state.products = action.payload 
    },
    setfilterItem(state,action){
      state.searchItem=action.payload
      state.productfilter=state.products.filter(item=>
        item.name.toLowerCase().includes(state.searchItem.toLocaleLowerCase())
      )
    }
  }
})

export const {setProducts , setfilterItem }=ProductSlice.actions
export default ProductSlice.reducer