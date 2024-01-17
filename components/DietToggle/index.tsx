import { Control, Controller } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { dietSelectOptions } from "../../constants/addMeal";
import { DietSelectOption } from "../../interfaces/addMeal";
import { inputStyleSheet } from "../InputForm";

const dietToggleStyleSheet = StyleSheet.create({
  button: {
    flex: 1,
    height: "100%",
    paddingVertical: 16,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
  },
  container: { flexDirection: "row", flex: 1, maxHeight: "20%", gap: 8 },
});

type Props = {
  control: Control;
  name: string;
};

const DietToggle = ({ control, name }: Props) => {
  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Text style={inputStyleSheet.text}>Is it in your diet?</Text>
      <View style={dietToggleStyleSheet.container}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                {dietSelectOptions.map((option: DietSelectOption) => {
                  const isSelected = value === option.isInDiet;

                  return (
                    <Pressable
                      style={{
                        borderColor: isSelected
                          ? option.bordercolor
                          : "#EFF0F0",
                        backgroundColor: isSelected
                          ? option.bgColor
                          : "#EFF0F0",
                        ...dietToggleStyleSheet.button,
                      }}
                      onPress={() => onChange(option.isInDiet)}
                      key={option.id}
                    >
                      <Text style={{ textAlign: "center" }}>
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DietToggle;
