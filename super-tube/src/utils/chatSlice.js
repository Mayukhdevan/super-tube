import { createSlice } from '@reduxjs/toolkit'
import { LIVE_CHAT_COUNT } from './constants'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages = [
          action.payload,
          ...state.messages.slice(0, state.messages.length - 2),
        ]
      } else {
        state.messages.unshift(action.payload)
      }
    },
  },
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer
