import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const SlideDown = ({ title, children }) => {
  const [isExpanded, setIsExpanded] =
    useState(false);
  const [contentHeight, setContentHeight] =
    useState(0);
  const animatedContentHeight = useRef(
    new Animated.Value(0)
  ).current;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(animatedContentHeight, {
      toValue: isExpanded ? 0 : contentHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const contentStyle = {
    height: animatedContentHeight,
    overflow: "hidden",
  };

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginRight: 10,
            }}
          >
            {title}
          </Text>
          <Text>{isExpanded ? "▲" : "▼"}</Text>
        </View>
      </TouchableOpacity>
      <Animated.View
        style={contentStyle}
        onLayout={handleContentLayout}
      >
        {isExpanded && children}
      </Animated.View>
    </View>
  );
};

export default SlideDown;
