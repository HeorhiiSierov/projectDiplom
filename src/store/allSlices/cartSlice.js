import { createSlice } from "@reduxjs/toolkit";

let initialState = JSON.parse(localStorage.getItem('item')) ?? []
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItemCart(state, action) {
      const productCart = state.find(({ id }) => {
        return id === action.payload.id
      })
      if (!productCart) {
        state.push(
          action.payload
        )
      } else {
        productCart.count++
      }
      localStorage.setItem('item', JSON.stringify(state))
    },

    countPlus(state, action) {
      const product = state.find(el => el.id === action.payload)
      if (product) {
        product.count++
      }
    },
    countMinus(state, action) {
      const product = state.find(el => el.id === action.payload)

      if (product.count > 1) {
        product.count--
      } else {
        state = state.filter((elem) => elem.id !== action.payload)
      }
    },

    deleteItem(state, action) {
      const index = state.findIndex(el => el.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1)
      }
      localStorage.setItem('item', JSON.stringify(state))
    },
    resetCart: (state) => {
      state.length = 0;
    },
  }

})

export const { resetCart, addItemCart, countPlus, countMinus, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
