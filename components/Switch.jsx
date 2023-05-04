import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { Animated } from "react-native";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const switchAnimation = useRef(
    new Animated.Value(0)
  ).current;

  const handleToggle = () => {
    setIsOn(!isOn);
    Animated.timing(switchAnimation, {
      toValue: isOn ? 0 : 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable onPress={handleToggle}>
      <View
        style={{
          width: 44,
          height: 22,
          borderRadius: 20,
          backgroundColor: isOn
            ? "#0092EF"
            : "#EBEBEB",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={[
            styles.thumbStyle,
            {
              transform: [
                {
                  translateX:
                    switchAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [2, 24],
                    }),
                },
              ],
            },
          ]}
        />
      </View>
    </Pressable>
  );
};

export default Switch;

const styles = StyleSheet.create({
  thumbStyle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "white",
    position: "absolute",
    top: 2,
  },
});
