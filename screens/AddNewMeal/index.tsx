import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { dateTimePickerOptions } from "../../constants/addMeal";
import { DateTimePickerOption } from "../../interfaces/addMeal";
import InputForm from "../../components/InputForm";
import DietToggle from "../../components/DietToggle";
import { format, getTime } from "date-fns";

const AddNewMeal = () => {
  const [date, setDate] = useState(new Date());
  const [pickerMode, setPickerMode] = useState<
    DateTimePickerOption["mode"] | null
  >(null);

  const { handleSubmit, control } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = useCallback((data: FieldValues) => {
    console.log(data);
    console.log(date);
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* TODO: control type error **/}
        <InputForm
          name="name"
          label="Name"
          control={control}
          placeholder="Name"
        />
        <InputForm
          label="Description"
          name="description"
          control={control}
          placeholder="Description"
        />
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            maxHeight: "10%",
            justifyContent: "space-between",
          }}
        >
          {dateTimePickerOptions.map((option) => {
            return (
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text>{option.label}</Text>
                <Pressable onPress={() => setPickerMode(option.mode)}>
                  <Text>
                    {option.mode === "date"
                      ? format(date, "dd/MM/yyyy")
                      : format(getTime(date), "HH:mm")}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>

        <DietToggle control={control} name="isInDiet" />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>Register meal</Text>
        </Pressable>
      </View>
      {!!pickerMode && (
        <DateTimePicker
          value={new Date()}
          mode={pickerMode}
          is24Hour={true}
          display="spinner"
          onChange={(event, selectedDate) => {
            setDate(selectedDate as Date);
            setPickerMode(null);
          }}
        />
      )}
    </>
  );
};

export default AddNewMeal;
