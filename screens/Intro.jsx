import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Logo from "../assets/Creative-Coder-W-01.svg";
import { Gif } from "react-native-gif";
import { Image } from "react-native";

const Intro = () => {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Logo
        fill='black'
        width={250}
        height={200}
      />

      <Image
        source={require("../assets/98194-loading.gif")}
        style={{
          backgroundColor: "transparent",
          width: 100,
          height: 100,
          position: "absolute",
          bottom: 40,
        }}
      />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
