import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";

const Tag = ({ backgroundColor, text }) => {
  return (
    <View
      style={{
        paddingVertical: 4,

        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor,
      }}
    >
      <Pressable>
        <Text
          style={{
            color: "white",
            fontSize: 8,
            fontWeight: 600,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({});
