import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { dateTimePickerOptions } from "../../constants/addMeal";
import { DateTimePickerOption } from "../../interfaces/addMeal";
import InputForm, { inputStyleSheet } from "../../components/InputForm";
import DietToggle from "../../components/DietToggle";
import { format, getTime } from "date-fns";

import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addMeal } from "../../redux/features/meal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "AddNewMeal">;

const AddNewMeal = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  console.log(date, "date");
  const [pickerMode, setPickerMode] = useState<
    DateTimePickerOption["mode"] | null
  >(null);

  const { handleSubmit, control } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = useCallback((data: FieldValues) => {
    const id = nanoid();

    dispatch(addMeal({ id, ...data, dateTime: date as Date }));

    navigation.navigate("MealConfirmation", { id });
  }, []);

  // TODO: button hidden by keyboard && form validation
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 40,
        backgroundColor: "#FAFAFA",
      }}
    >
      <View style={{ gap: 24, flex: 1 }}>
        <InputForm
          name="name"
          label="Name"
          control={control}
          placeholder="Name"
        />
        <InputForm
          label="Description"
          multiline={true}
          style={{
            ...inputStyleSheet.input,
            height: 100,
          }}
          name="description"
          control={control}
        />
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            maxHeight: "10%",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          {dateTimePickerOptions.map((option) => {
            return (
              <View style={{ flex: 1, flexDirection: "column", gap: 4 }}>
                <Text style={inputStyleSheet.text}>{option.label}</Text>
                <Pressable onPress={() => setPickerMode(option.mode)}>
                  <Text style={inputStyleSheet.input}>
                    {option.mode === "date"
                      ? format(date, "dd/MM/yyyy")
                      : format(getTime(date), "HH:mm")}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>

        {/** TODO: bug on date picker */}
        {!!pickerMode && (
          <DateTimePicker
            style={{ alignSelf: "flex-start" }}
            value={new Date()}
            mode={pickerMode}
            is24Hour={true}
            display="default"
            onChange={(_, selectedDate) => {
              setDate(selectedDate);
              setPickerMode(null);
            }}
          />
        )}
        <DietToggle control={control} name="isInDiet" />
      </View>
      <Button onPress={handleSubmit(onSubmit)}>
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "700",
          }}
        >
          Register meal
        </Text>
      </Button>
    </View>
  );
};

export default AddNewMeal;
