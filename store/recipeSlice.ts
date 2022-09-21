// Redux
import { createSlice } from "@reduxjs/toolkit";
// Type
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { StringType } from "../utils/type";

// Define the initial state using that type
const initialState: StringType = {
  name: "",
  eng: "",
  sandwich: "",
  sandwichCalorie: "",
  bread: "",
  breadCalorie: "",
  cheese: "",
  cheeseCalorie: "",
};

export const counterSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    selectName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    selectEng: (state, action: PayloadAction<string>) => {
      state.eng = action.payload;
    },
    selectSandwich: (state, action: PayloadAction<string>) => {
      state.sandwich = action.payload;
    },
    sandwichKcal: (state, action: PayloadAction<string>) => {
      state.sandwichCalorie = action.payload;
    },
    selectBread: (state, action: PayloadAction<string>) => {
      state.bread = action.payload;
    },
    breadKcal: (state, action: PayloadAction<string>) => {
      state.breadCalorie = action.payload;
    },
    selectCheese: (state, action: PayloadAction<string>) => {
      state.cheese = action.payload;
    },
    cheeseKcal: (state, action: PayloadAction<string>) => {
      state.cheeseCalorie = action.payload;
    },
  },
});

export const {
  selectName,
  selectEng,
  selectSandwich,
  sandwichKcal,
  selectBread,
  breadKcal,
  selectCheese,
  cheeseKcal,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.recipe;

export default counterSlice.reducer;
