import { configureStore } from '@reduxjs/toolkit'
import contactFormReducer from '../features/contactForm/contactFormSlice'
import mainMenuReducer from '../features/mainMenu/mainMenuSlice'
import mainModeReducer from '../features/mainMenu/mainModeSlice'

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    mainMenu: mainMenuReducer,
    mainMode: mainModeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
