import { createSlice } from "@reduxjs/toolkit";

export type Meal = {
  id: string;
  name: string;
  description: string;
  dateTime: Date;
  isInDiet: boolean;
};

// TODO: unmock
const initialState: Meal[] = [
  // {
  //   dateTime: "2024-01-19T08:54:12.397Z",
  //   description: "Mdmannsj",
  //   id: "Bo8yZ1_JGWnLj0ObDFo2s",
  //   isInDiet: true,
  //   name: "Meal",
  // },
  // {
  //   dateTime: "2024-01-18T08:54:12.397Z",
  //   description: "Mdmannsj",
  //   id: "K-zNZXUH55DZ5JIa-q8cV",
  //   isInDiet: false,
  //   name: "Meal 2",
  // },
  // {
  //   dateTime: "2024-01-18T07:54:12.397Z",
  //   description: "Mdmannsj",
  //   id: "-A9VlNIyL1kIIzwrcGzoa",
  //   isInDiet: false,
  //   name: "Meal 3",
  // },
];

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addMeal: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { addMeal } = mealSlice.actions;
export const mealReducer = mealSlice.reducer;
