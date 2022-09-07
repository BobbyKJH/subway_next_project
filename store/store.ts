// Redux
import { configureStore } from "@reduxjs/toolkit";
// Component
import recipeSlice from "./recipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
