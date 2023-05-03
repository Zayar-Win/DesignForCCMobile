import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";
import Left from "../assets/Left.svg";

const Header = ({
  navigation,
  headerTitle,
  children,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingTop: 16,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <Pressable
        onPress={() => navigation.goBack()}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: "#EBEBEB",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Left width={11} height={20} />
        </View>
      </Pressable>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 24,
          fontWeight: 600,
        }}
      >
        {headerTitle}
      </Text>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
