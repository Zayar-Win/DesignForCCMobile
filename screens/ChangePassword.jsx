import {
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import ProfileInputField from "../components/ProfileInputField";
import { useTailwind } from "tailwind-rn";

const ChangePassword = () => {
  const tailwind = useTailwind();
  const [
    isOldPasswordShow,
    setIsOldPasswordShow,
  ] = useState(false);
  const [
    isNewPasswordShow,
    setIsNewOldPasswordShow,
  ] = useState(false);

  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View
        style={tailwind(
          "mt-[32px] flex-1 w-full"
        )}
      >
        <ProfileInputField
          label={"Old Password"}
          value={"password"}
          isPassword
        />
        <ProfileInputField
          label={"New Password"}
          value={"password"}
          isPassword
        />
      </View>
      <View
        style={[
          tailwind(
            "flex-row items-center justify-center my-[32px]"
          ),
          {
            gap: 16,
          },
        ]}
      >
        <Text
          style={tailwind(
            "text-[14px] leading-[17px] font-medium text-black-gray"
          )}
        >
          Forgot Password ?
        </Text>
        <Text
          style={tailwind(
            "text-[14px] leading-[17px] font-semibold text-primary"
          )}
        >
          Reset Password
        </Text>
      </View>
      <View
        style={tailwind(
          "px-[20px] w-full mt-[16px]"
        )}
      >
        <Button text={"Change Password"} />
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
