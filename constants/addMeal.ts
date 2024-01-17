import { DateTimePickerOption, DietSelectOption } from "../interfaces/addMeal";

export const dietSelectOptions: DietSelectOption[] = [
  {
    id: 1,
    label: "Yes",
    isInDiet: true,
    bgColor: "#E5F0DB",
    bordercolor: "#639339",
  },
  {
    id: 2,
    label: "No",
    isInDiet: false,
    bgColor: "#F4E6E7",
    bordercolor: "#BF3B44",
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
