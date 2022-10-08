// Redux
import { createSlice } from "@reduxjs/toolkit";
// Type
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { StringType } from "../utils/type";

const initialState: StringType = {
  name: "",
  eng: "",
  sandwich: "",
  sandwichCalorie: "",
  bread: "",
  breadImg: "",
  breadCalorie: "",
  cheese: "",
  cheeseImg: "",
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
    breadImage: (state, action: PayloadAction<string>) => {
      state.breadImg = action.payload;
    },
    selectCheese: (state, action: PayloadAction<string>) => {
      state.cheese = action.payload;
    },
    cheeseKcal: (state, action: PayloadAction<string>) => {
      state.cheeseCalorie = action.payload;
    },
    cheeseImage: (state, action: PayloadAction<string>) => {
      state.cheeseImg = action.payload;
    },
    resetButton: (state) => {
      state.name = "";
      state.eng = "";
      state.sandwich = "";
      state.sandwichCalorie = "";
      state.bread = "";
      state.breadImg = "";
      state.breadCalorie = "";
      state.cheese = "";
      state.cheeseImg = "";
      state.cheeseCalorie = "";
    },
  },
});

export const {
  selectName,
  selectEng,
  selectSandwich,
  sandwichKcal,
  selectBread,
  breadImage,
  breadKcal,
  selectCheese,
  cheeseImage,
  cheeseKcal,
  resetButton,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.recipe;

export default counterSlice.reducer;
