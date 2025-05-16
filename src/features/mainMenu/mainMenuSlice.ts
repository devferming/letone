import { createSlice } from '@reduxjs/toolkit'

interface MainMenuState {
  crrStatus: 'menu' | 'x'
}

const initialState: MainMenuState = {
 crrStatus: 'menu',
}

const mainMenuSlice = createSlice({
  name: 'mainLittleMenu',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.crrStatus = 'x'
    },
    hiddenMenu: (state) => {
      state.crrStatus = 'menu'
    }
  },
})

export const { showMenu, hiddenMenu, } = mainMenuSlice.actions
export default mainMenuSlice.reducer
