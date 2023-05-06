import { Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";

const Tag = ({ backgroundColor, text }) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind(
          "py-[4px] px-[8px] rounded-[5px] "
        ),

        {
          backgroundColor,
        },
      ]}
    >
      <Pressable>
        <Text
          style={tailwind(
            "text-white text-[8px] font-semibold"
          )}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Tag;
