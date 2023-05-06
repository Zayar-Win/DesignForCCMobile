import { Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";

const SearchBar = ({ placeholder, style }) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind(
          "mt-[10px] justify-center py-[15px] bg-white-gray-soft rounded-[100px]"
        ),
        style,
      ]}
    >
      <Ionicons
        name='search-sharp'
        size={30}
        color='#656565'
        style={tailwind("absolute left-[25px]")}
      />
      <TextInput
        style={tailwind(
          "text-[16px] ml-[75px] mr-[10px]"
        )}
        placeholder={placeholder}
        placeholderTextColor='#656565'
      />
    </View>
  );
};

export default SearchBar;
