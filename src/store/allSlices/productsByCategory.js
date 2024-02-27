import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProductsBycategory = createAsyncThunk
  ('productByCategory/getProductsBycategory',
    async (categoryId) => {
      const url = `http://localhost:3333/categories/${categoryId}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
      } catch (error) {
        throw error
      }
    })

const productByCategory = createSlice({
  name: 'productByCategory',
  initialState: {
    status: null,
    list: {
      data: []
    },
  },
  reducers: {
    sortProductsCat(state, action) {
      if (action.payload === "low-high") {
        state.list.data.sort((a, b) => a.price - b.price)
      }
      else if (action.payload === "high-low") {
        state.list.data.sort((a, b) => b.price - a.price)
      }
      else if (action.payload === "titleAsc") {
        state.list.data.sort((a, b) => a.title.localeCompare(b.title))
      } else if (action.payload === "titleDesc") {
        state.list.data.sort((a, b) => b.title.localeCompare(a.title))
      } else {
        state.list.data.sort((a, b) => a.id - b.id)
      }
    },

    filterPriceCat(state, action) {
      const { minPrice, maxPrice } = action.payload
      state.list.data.map((elem) => {
        let actualPrice = elem.discont_price || elem.price;
        if (actualPrice >= minPrice && actualPrice <= maxPrice) {
          elem.showProductFilter = true;
        } else {
          elem.showProductFilter = false
        }
        return elem
      })
    },
    discountProductsCat(state, action) {
      if (action.payload) {
        state.list.data.map((elem) => {
          if (elem.discont_price === null) {
            elem.showProduct = false
          } return elem
        })
      } else {
        state.list.data.map((elem) => {
          elem.showProduct = true
          return elem
        })
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsBycategory.pending, (state) => {
        state.status = 'pandung'
      })
      .addCase(getProductsBycategory.fulfilled, (state, action) => {
        state.list = action.payload
        const { data } = action.payload
        state.list.data = data.map((elem) => ({
          ...elem, showProduct: true,
          showProductFilter: true
        }))
      })
      .addCase(getProductsBycategory.rejected, (state) => {
        state.status = 'rejected'
      })
  }
})
export const { sortProductsCat, discountProductsCat, filterPriceCat } = productByCategory.actions
export default productByCategory.reducer;