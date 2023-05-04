import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";
import EyeOpen from "../assets/Eye Not-Protected Icon.svg";
import EyeClose from "../assets/Eye Protected Icon.svg";
import { Pressable } from "react-native";

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
        <View
          style={{
            height: 56,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBEB",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 600,
              color: "#0092EF",
              paddingRight: 16,
            }}
          >
            Old Password :{" "}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              secureTextEntry={!isOldPasswordShow}
              value={"password"}
              style={{
                fontSize: 16,
                color: "#232425",
                width: "100%",
                paddingVertical: 5,
              }}
            />
            {isOldPasswordShow ? (
              <EyeOpen
                width={25}
                height={25}
                onPress={() =>
                  setIsOldPasswordShow(
                    !isOldPasswordShow
                  )
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
                  setIsOldPasswordShow(
                    !isOldPasswordShow
                  )
                }
                style={{
                  position: "absolute",
                  right: 20,
                }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            height: 56,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBEB",
            flexDirection: "row",
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 600,
              color: "#0092EF",
              paddingRight: 16,
            }}
          >
            New Password :{" "}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              secureTextEntry={!isNewPasswordShow}
              value={"password"}
              style={{
                fontSize: 16,
                color: "#232425",
                width: "100%",
                paddingVertical: 5,
              }}
            />
            {isNewPasswordShow ? (
              <EyeOpen
                width={25}
                height={25}
                onPress={() =>
                  setIsNewOldPasswordShow(
                    !isNewPasswordShow
                  )
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
                  setIsNewOldPasswordShow(
                    !isNewPasswordShow
                  )
                }
                style={{
                  position: "absolute",
                  right: 20,
                }}
              />
            )}
          </View>
        </View>
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
