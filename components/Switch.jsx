import { Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { Animated } from "react-native";
import { useTailwind } from "tailwind-rn";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const switchAnimation = useRef(
    new Animated.Value(0)
  ).current;

  const tailwind = useTailwind();

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
        style={tailwind(
          `w-[44px] h-[22px] rounded-[20px] ${
            isOn ? "bg-primary" : "bg-white-gray"
          } justify-center`
        )}
      >
        <Animated.View
          style={[
            tailwind(
              "w-[18px] h-[18px] rounded-[9px] absolute top-[2px] bg-white"
            ),
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
