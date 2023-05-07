import { Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import EyeOpen from "../assets/Eye Not-Protected Icon.svg";
import EyeClose from "../assets/Eye Protected Icon.svg";
import { useTailwind } from "tailwind-rn";

const ProfileInputField = ({
  label,
  value,
  labelStyle,
  wrapperStyle,
  isPassword,
  ...props
}) => {
  const tailwind = useTailwind();
  const [isPasswordShow, setIsPasswordShow] =
    useState(false);
  return (
    <View
      style={[
        tailwind(
          "p-[20px] border-b-[1px] border-white-gray flex-row flex-1 w-full items-center"
        ),
        wrapperStyle,
      ]}
    >
      <Text
        style={[
          tailwind(
            "text-[14px] font-semibold text-primary pr-[16px]"
          ),
          labelStyle,
        ]}
      >
        {label} :{" "}
      </Text>
      <View style={tailwind("flex-1")}>
        <TextInput
          secureTextEntry={
            isPassword && !isPasswordShow
          }
          value={value}
          {...props}
          style={tailwind(
            "text-[16px] text-black w-full"
          )}
        />
        {isPassword ? (
          isPasswordShow ? (
            <EyeOpen
              width={25}
              height={25}
              onPress={() =>
                setIsPasswordShow(!isPasswordShow)
              }
              style={tailwind(
                "absolute right-[20px]"
              )}
            />
          ) : (
            <EyeClose
              width={25}
              height={25}
              onPress={() =>
                setIsPasswordShow(!isPasswordShow)
              }
              style={tailwind(
                "absolute right-[20px]"
              )}
            />
          )
        ) : null}
      </View>
    </View>
  );
};

export default ProfileInputField;
