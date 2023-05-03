import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { Animated } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Easing } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const defaultFunction = () => {};

const TextField = ({
  isPassword = false,
  label = "Name",
  value,
  style,
  onBlur = defaultFunction,
  onFocus = defaultFunction,
  ...props
}) => {
  const focusAnimation = useRef(
    new Animated.Value(0)
  ).current;
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: isFocus || value ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [isFocus]);
  return (
    <Animated.View
      style={[{ width: "100%" }, style]}
    >
      <TextInput
        style={styles.input}
        onFocus={() => {
          setIsFocus(true);
          onFocus();
        }}
        onBlur={() => {
          setIsFocus(false);
          onBlur();
        }}
        secureTextEntry={isPassword && isSecure}
        {...props}
      />
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [
              {
                translateY:
                  focusAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [13, -13],
                  }),
              },
            ],
          },
        ]}
      >
        <Text>{label}</Text>
      </Animated.View>
      {isPassword ? (
        <View style={styles.eye}>
          <Icon
            name={isSecure ? "eye-off" : "eye"}
            size={20}
            onPress={() =>
              setIsSecure((prev) => !prev)
            }
          />
        </View>
      ) : null}
    </Animated.View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#0092EF",
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    height: 56,
  },
  labelContainer: {
    position: "absolute",
    left: 12,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  eye: {
    position: "absolute",
    top: 18,
    right: 20,
  },
});
