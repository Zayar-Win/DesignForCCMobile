import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import Logo from "../assets/Creative-Coder-W-01.svg";
import Svg from "react-native-svg";
import { TextInput } from "react-native-gesture-handler";
import { Animated } from "react-native";
import { Easing } from "react-native";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Logo
        width={250}
        height={160}
        fill='black'
      />
      <Text style={styles.text}>Welcome 🚀</Text>
      <TextField
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextField
        label='Password'
        isPassword
        style={{ marginTop: 20 }}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        text='Sign In'
        style={{ marginTop: 20 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            paddingRight: 10,
          }}
        >
          Forget Password?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#0092EF",
          }}
        >
          Reset Password
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={styles.bar} />
        <Text style={{ paddingHorizontal: 10 }}>
          Or use social sign in
        </Text>
        <View style={styles.bar} />
      </View>
      <View
        style={{
          marginTop: 22,
          flexDirection: "row",
          gap: 16,
        }}
      >
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='google' size={35} />
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='apple1' size={35} />
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='github' size={35} />
          </View>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 38,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            paddingRight: 10,
          }}
        >
          New to creative coder?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#0092EF",
          }}
        >
          Register Here
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: 600,
    marginTop: -28,
    marginBottom: 28,
  },
  bar: {
    flex: 1,
    height: 1,
    backgroundColor: "#656565",
  },
});
