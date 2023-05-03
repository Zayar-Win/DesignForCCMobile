import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const FilterTag = ({ tag, isActive, style }) => {
  return (
    <View
      style={[
        {
          paddingVertical: 10,
          paddingHorizontal: 18,
          backgroundColor: isActive
            ? "#0092EF"
            : "#F5F5F5",
          borderRadius: 5,
          marginRight: 8,
        },
        style,
      ]}
    >
      <Text
        style={{
          fontSize: 12,
          lineHeight: 15,
          fontWeight: 400,
          color: isActive ? "white" : "#656565",
        }}
      >
        {tag}
      </Text>
    </View>
  );
};

export default FilterTag;

const styles = StyleSheet.create({});
