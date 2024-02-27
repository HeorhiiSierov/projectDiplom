import { configureStore } from "@reduxjs/toolkit";
import categoriesSlices from "./allSlices/categoriesSlice.js"
import productsSlice from "./allSlices/allProductsSlice.js"
import productsByCategorySlice from "./allSlices/productsByCategory.js";
import cartSlice from "./allSlices/cartSlice.js";
import singleProducts from "../store/allSlices/singleItemSlice"
import  saleReducer from './allSlices/salePost'
import orderReducer from './allSlices/orderPost'

export const store = configureStore({
  reducer: {
    categories:categoriesSlices,
    products:productsSlice,
    productByCategory:productsByCategorySlice,
    cart:cartSlice,
    product:singleProducts,
    sale:saleReducer,
    order:orderReducer,
  }
})



export default store;

