import React, { useState } from "react";
import { TextInput } from "react-native";
import { View, Text } from "react-native";

export default function SlidableView() {
  const [progress, setProgress] = useState(0);

  const handleProgressBarTouch = (event) => {
    const { pageX } = event.nativeEvent;
    const progressBarWidth = 200; // Replace with your progress bar width
    const newProgress = Math.max(
      0,
      Math.min(1, pageX / progressBarWidth)
    );
    setProgress(newProgress);
  };

  return (
    <View
      style={{
        width: 200,
        height: 20,
        backgroundColor: "gray",
      }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={handleProgressBarTouch}
      onResponderMove={handleProgressBarTouch}
    >
      <View
        style={{
          width: progress * 200,
          height: 20,
          backgroundColor: "blue",
        }}
      />
      <Text>{`Progress is: ${progress}`}</Text>
    </View>
  );
}
