import { Control, Controller } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

import { dietSelectOptions } from "../../constants/addMeal";
import { DietSelectOption } from "../../interfaces/addMeal";

type Props = {
  control: Control;

  name: string;
};
const DietToggle = ({ control, name }: Props) => {
  return (
    <>
      <Text>Is it in your diet?</Text>
      <View style={{ flexDirection: "row", flex: 1, maxHeight: "10%" }}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                {/** TODO: styles */}
                {dietSelectOptions.map((option: DietSelectOption) => {
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
    </>
  );
};

export default DietToggle;
