import { createSlice } from '@reduxjs/toolkit'

interface mainModeState {
 crrStatus: 'darkMode' | 'lightMode'
}

const initialState: mainModeState = {
 crrStatus: 'darkMode',
}

const mainModeSlice = createSlice({
 name: 'mainMode',
 initialState,
 reducers: {
  darkMode: (state) => {
   state.crrStatus = 'darkMode'
  },
  lightMode: (state) => {
   state.crrStatus = 'lightMode'
  }
 },
})

export const { darkMode, lightMode, } = mainModeSlice.actions
export default mainModeSlice.reducer
