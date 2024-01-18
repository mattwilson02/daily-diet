import { createSlice } from "@reduxjs/toolkit";

type Meal = {
  id: string;
  name: string;
  description: string;
  dateTime: string;
  isInDiet: boolean;
};

const initialState: Meal[] = [];

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMeal } = mealSlice.actions;
export const mealReducer = mealSlice.reducer;
