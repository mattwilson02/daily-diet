import { PropsWithChildren, forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps } from "react-native";

type Props = {
  name: string;
  control: Control;
  placeholder: string;
  label: string;
} & TextInputProps;

const InputForm = forwardRef<TextInput, Props>(
  (
    { name, control, placeholder, label, ...rest }: PropsWithChildren<Props>,
    ref
  ) => {
    /** TODO: styles */

    return (
      <>
        <Text>{label}</Text>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                ref={ref}
                {...rest}
              />
            );
          }}
        />
      </>
    );
  }
);

export default InputForm;
