import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    closeMenu: state => {
      state.isMenuOpen = false
    },
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer
