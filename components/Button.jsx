import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Animated } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = ({
  text,
  style,
  icon,
  ...props
}) => {
  const tailwind = useTailwind();
  return (
    <Animated.View style={[style, styles.button]}>
      <Pressable {...props}>
        <View
          style={tailwind(
            "flex-row items-center justify-center"
          )}
        >
          {icon ? icon : null}
          <Text style={styles.text}>{text}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#003E66",
    height: 56,
    borderRadius: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
});
