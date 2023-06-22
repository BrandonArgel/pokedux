import { ActionTypeTheme } from "@state/action-types"
import { Action } from "@state/actions"



const toggleLocalStorageTheme = (isDarkMode: boolean) => {
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}

const initialState = {
  isDarkMode: true,
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