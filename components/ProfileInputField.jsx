import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import EyeOpen from "../assets/Eye Not-Protected Icon.svg";
import EyeClose from "../assets/Eye Protected Icon.svg";

const ProfileInputField = ({
  label,
  value,
  labelStyle,
  wrapperStyle,
  isPassword,
  ...props
}) => {
  const [isPasswordShow, setIsPasswordShow] =
    useState(false);
  return (
    <View
      style={[
        {
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
          flexDirection: "row",
          flex: 1,
          width: "100%",
          alignItems: "center",
        },
        wrapperStyle,
      ]}
    >
      <Text
        style={[
          {
            fontSize: 14,
            lineHeight: 17,
            fontWeight: 600,
            color: "#0092EF",
            paddingRight: 16,
          },
          labelStyle,
        ]}
      >
        {label} :{" "}
      </Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <TextInput
          secureTextEntry={
            isPassword && !isPasswordShow
          }
          value={value}
          {...props}
          style={{
            fontSize: 16,
            color: "#232425",
            width: "100%",
          }}
        />
        {isPassword ? (
          isPasswordShow ? (
            <EyeOpen
              width={25}
              height={25}
              onPress={() =>
                setIsPasswordShow(!isPasswordShow)
              }
              style={{
                position: "absolute",
                right: 20,
              }}
            />
          ) : (
            <EyeClose
              width={25}
              height={25}
              onPress={() =>
                setIsPasswordShow(!isPasswordShow)
              }
              style={{
                position: "absolute",
                right: 20,
              }}
            />
          )
        ) : null}
      </View>
    </View>
  );
};

export default ProfileInputField;

const styles = StyleSheet.create({});
