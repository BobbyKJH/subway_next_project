// Redux
import { createSlice } from "@reduxjs/toolkit";
// Type
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { StringType } from "../utils/type";

// Define the initial state using that type
const initialState: StringType = {
  sandwich: "",
  bread: "",
  cheese: "",
};

export const counterSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    selectSandwich: (state, action: PayloadAction<string>) => {
      state.sandwich = action.payload;
    },
    selectBread: (state, action: PayloadAction<string>) => {
      state.bread = action.payload;
    },
    selectCheese: (state, action: PayloadAction<string>) => {
      state.cheese = action.payload;
    },
  },
});

export const { selectSandwich, selectBread, selectCheese } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.recipe;

export default counterSlice.reducer;
