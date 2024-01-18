import { PropsWithChildren, forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = {
  name: string;
  control: Control;

  label: string;
} & TextInputProps;

export const inputStyleSheet = StyleSheet.create({
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#DDDEDF",
    padding: 14,
    color: "#1B1D1E",
  },
  text: {
    color: "#333638",
  },
});

const InputForm = forwardRef<TextInput, Props>(
  ({ name, control, label, ...rest }: PropsWithChildren<Props>, ref) => {
    return (
      <View style={{ gap: 4 }}>
        <Text style={inputStyleSheet.text}>{label}</Text>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                style={inputStyleSheet.input}
                value={value}
                onChangeText={onChange}
                ref={ref}
                {...rest}
              />
            );
          }}
        />
      </View>
    );
  }
);

export default InputForm;
