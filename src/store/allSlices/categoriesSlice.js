import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const url = 'http://localhost:3333/categories/all'
  try {
    const respons = await fetch(url)
    const data = await respons.json()
    return data
  } catch (error) {
    throw error
  }
})

const categoriesSlice = createSlice({
  name: 'products',
  initialState: {
    status: null,
    categoriesList: []
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'fulfilld'
        state.categoriesList = action.payload
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = 'rejected'
      })
})
export default categoriesSlice.reducer;