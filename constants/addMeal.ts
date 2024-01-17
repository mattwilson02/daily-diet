import { DateTimePickerOption, DietSelectOption } from "../interfaces/addMeal";

export const dietSelectOptions: DietSelectOption[] = [
  {
    id: 1,
    label: "Yes",
    isInDiet: true,
    color: "green",
  },
  {
    id: 2,
    label: "No",
    isInDiet: false,
    color: "red",
  },
];

export const dateTimePickerOptions: DateTimePickerOption[] = [
  {
    mode: "date",
    label: "Date",
    title: "Show date picker",
  },
  {
    mode: "time",
    label: "Time",
    title: "Show time picker",
  },
];
