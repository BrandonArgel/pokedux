import { ActionTypeTheme } from "@state/action-types"
import { Action } from "@state/actions"

const toggleLocalStorageTheme = (isDarkMode: boolean) => {
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}

const isDarkModeSO = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDarkModeLS = JSON.parse(localStorage.getItem('isDarkMode') ?? 'true')

const initialState = {
  isDarkMode: isDarkModeLS ?? isDarkModeSO,
}

export const themeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypeTheme.TOGGLE_THEME:
      toggleLocalStorageTheme(!state.isDarkMode)
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    default:
      return state
  }
}