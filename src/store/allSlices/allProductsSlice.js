import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const allProducts = createAsyncThunk('products/allProducts ', async () => {
  const url = 'http://localhost:3333/products/all'
  try {
    const respons = await fetch(url)
    const data = await respons.json()
    return data
  } catch (error) {
    throw error
  }
})


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    status: null,
    list: []
  },

  reducers: {
    sortProducts(state, action) {
      if (action.payload === "low-high") {
        state.list.sort((a, b) => a.price - b.price)
      }
      else if (action.payload === "high-low") {
        state.list.sort((a, b) => b.price - a.price)
      }
      else if (action.payload === "titleAsc") {
        state.list.sort((a, b) => a.title.localeCompare(b.title))
      } else if (action.payload === "titleDesc") {
        state.list.sort((a, b) => b.title.localeCompare(a.title))
      } else {
        state.list.sort((a, b) => a.id - b.id)
      }
    },

    filterPrice(state, action) {
      const { minPrice, maxPrice } = action.payload
      state.list.map((elem) => {
        let actualPrice = elem.discont_price || elem.price;
        if (actualPrice >= minPrice && actualPrice <= maxPrice) {
          elem.showProductFilter = true;
        } else {
          elem.showProductFilter = false
        }
        return elem
      })
    },

    discountProducts(state, action) {
      if (action.payload) {
        state.list.map((elem) => {
          if (elem.discont_price === null) {
            elem.showProduct = false
          } return elem
        })

      } else {
        state.list.map((elem) => {
          elem.showProduct = true
          return elem
        })
      }
    }
  },

  extraReducers: (builder) =>
    builder
      .addCase(allProducts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.status = 'fulfilld'
        state.list = action.payload.map((elem) => ({
          ...elem, showProduct: true,
          showProductFilter: true
        }))
      })
      .addCase(allProducts.rejected, (state) => {
        state.status = 'rejected'
      })
})

export const { filterPrice, sortProducts, discountProducts } = productsSlice.actions
export default productsSlice.reducer