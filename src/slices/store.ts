import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dataSlice from "./pokemonsSlice";
import uiSlice from "./uiSlice";
// import { logger } from '@middleware';

const store = configureStore({
  reducer: {
    data: dataSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
