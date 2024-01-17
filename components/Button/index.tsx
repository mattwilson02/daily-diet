import { PropsWithChildren } from "react";
import { Pressable, PressableProps } from "react-native";

const Button = ({ children, ...rest }: PropsWithChildren & PressableProps) => {
  return (
    <Pressable
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 50,
        borderRadius: 6,
        backgroundColor: "#333638",
      }}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default Button;
