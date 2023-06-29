import { createSlice } from "@reduxjs/toolkit";

const toggleLocalStorageTheme = (isDarkMode: boolean) => {
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}

const isDarkModeSO = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDarkModeLS = JSON.parse(localStorage.getItem('isDarkMode') ?? 'true')

type uiState = {
  isDarkMode: boolean,
}

const initialState: uiState = {
  isDarkMode: isDarkModeLS ?? isDarkModeSO,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      toggleLocalStorageTheme(!state.isDarkMode)
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    },
  },
})

export const {
  toggleTheme,
} = uiSlice.actions

export default uiSlice.reducer