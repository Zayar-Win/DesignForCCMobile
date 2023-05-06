import { Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Animated } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = ({
  text,
  buttonStyle,
  textStyle,
  icon,
  ...props
}) => {
  const tailwind = useTailwind();
  return (
    <Animated.View
      style={[
        tailwind(
          `bg-secondary rounded-[10px] h-[56px] w-full items-center justify-center`
        ),
        buttonStyle,
      ]}
    >
      <Pressable {...props}>
        <View
          style={tailwind(
            "flex-row items-center justify-center"
          )}
        >
          {icon ? icon : null}
          <Text
            style={[
              tailwind(
                "text-white text-[18px] font-semibold"
              ),
              textStyle,
            ]}
          >
            {text}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Button;
