import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: {},
  },
  reducers: {
    cacheSearch: (state, action) => {
      state.searchData = { ...state.searchData, ...action.payload }
    },
  },
})

export const { cacheSearch } = searchSlice.actions
export default searchSlice.reducer
