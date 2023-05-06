import { Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const FilterTag = ({ tag, isActive, style }) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind(
          `py-[10px] px-[18px] ${
            isActive
              ? "bg-primary"
              : "bg-white-gray-soft"
          } rounded-[5px] mr-[5px]`
        ),
        style,
      ]}
    >
      <Text
        style={tailwind(
          `text-[12px] leading-[15px] font-normal ${
            isActive
              ? "text-white"
              : "text-black-gray"
          }`
        )}
      >
        {tag}
      </Text>
    </View>
  );
};

export default FilterTag;
