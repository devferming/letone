import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactFormState {
  isOpen: boolean
  statusKey: 'sending' | 'success' | 'error'
}

const initialState: ContactFormState = {
  isOpen: false,
  statusKey: 'sending'
}

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpen = true
      state.statusKey = 'sending'
    },
    closeForm: (state) => {
      state.isOpen = false
    },
    setStatus: (state, action: PayloadAction<'sending' | 'success' | 'error'>) => {
      state.statusKey = action.payload
    },
  },
})

export const { openForm, closeForm, setStatus } = contactFormSlice.actions
export default contactFormSlice.reducer
