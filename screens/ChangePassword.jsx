import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import ProfileInputField from "../components/ProfileInputField";

const ChangePassword = () => {
  const [
    isOldPasswordShow,
    setIsOldPasswordShow,
  ] = useState(false);
  const [
    isNewPasswordShow,
    setIsNewOldPasswordShow,
  ] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginTop: 32,
          flex: 1,
          width: "100%",
        }}
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
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginVertical: 32,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 17,
            fontWeight: 500,
            color: "#656565",
          }}
        >
          Forgot Password ?
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 17,
            fontWeight: 600,
            color: "#0092EF",
          }}
        >
          Reset Password
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          width: "100%",
          marginTop: 16,
        }}
      >
        <Button text={"Change Password"} />
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
