import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type FormValues = {
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: boolean;
};

const dietSelectOptions = [
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

const dateTimePickerOptions = [
  {
    mode: "date",
    title: "Show date picker",
  },
  {
    mode: "time",
    title: "Show time picker",
  },
];

const AddNewMeal = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const [date, setDate] = useState(new Date());
  const [pickerMode, setPickerMode] = useState<"date" | "time" | null>(null);

  const onSubmit = useCallback((data: FormValues) => {
    console.log(data);
    console.log(date);
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        {dateTimePickerOptions.map((option) => {
          return (
            <Pressable onPress={() => setPickerMode(option.mode)}>
              <Text>{option.title}</Text>
            </Pressable>
          );
        })}
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                placeholder="Name"
                value={value}
                onChangeText={onChange}
              />
            );
          }}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                placeholder="Description"
                value={value}
                onChangeText={onChange}
              />
            );
          }}
        />
        <View style={{ flexDirection: "row", flex: 1, maxHeight: "10%" }}>
          <Controller
            name="isInDiet"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  {dietSelectOptions.map((option) => {
                    return (
                      <Pressable
                        style={{
                          flex: 1,
                          backgroundColor:
                            value === option.isInDiet ? option.color : "grey",
                          justifyContent: "center",
                        }}
                        onPress={() => onChange(option.isInDiet)}
                        key={option.id}
                      >
                        <Text>{option.label}</Text>
                      </Pressable>
                    );
                  })}
                </>
              );
            }}
          />
        </View>
        <Button title="Register meal" onPress={handleSubmit(onSubmit)} />
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
